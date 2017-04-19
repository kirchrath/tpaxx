package de.tpaxx.core;

import de.tpaxx.interfaces.ServiceProvider;
import de.tpaxx.interfaces.services.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;
import java.util.stream.Collectors;

public abstract class ProviderWorker<T extends Service> implements ServiceProvider<T> {

    public abstract List<ServiceProvider> getProviders();

    protected List<Callable<List<T>>> createLookupTasks(T candidate) {

        return getProviders()
                .stream()
                .map((Function<ServiceProvider, Callable<List<T>>>) provider -> (Callable<List<T>>) () -> provider.find(candidate))
                .collect(Collectors.toList());
    }

    protected List<T> collectData(List<Callable<List<T>>> tasks) {
        List<T> result;
        ExecutorService executor = Executors.newFixedThreadPool(getProviders().size());

        try {
            result = executeFindTasks(executor, tasks);
        } catch (InterruptedException e) {
            result = new ArrayList<>();
            e.printStackTrace();
        }
        return result;
    }

    protected List<T> executeFindTasks(ExecutorService executor, List<Callable<List<T>>> tasks) throws InterruptedException {

        List<List<T>> data = executor
                .invokeAll(tasks)
                .stream()
                .map(future -> {
                    try {
                        return future.get(5, TimeUnit.SECONDS);
                    } catch (Exception e) {
                        throw new IllegalStateException(e);
                    }
                })
                .collect(Collectors.toList());

        List<T> result = data
                .stream()
                .flatMap(services -> services.stream())
                .collect(Collectors.toList());

        return result;
    }
}
