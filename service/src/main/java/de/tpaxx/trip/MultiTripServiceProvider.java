package de.tpaxx.trip;

import de.tpaxx.core.ProviderWorker;
import de.tpaxx.interfaces.ServiceProvider;
import de.tpaxx.interfaces.TripServiceProvider;
import de.tpaxx.interfaces.services.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;

/**
 * Created by wasp on 1/11/17.
 */
@Service
public class MultiTripServiceProvider extends ProviderWorker<TripService> {

    private List<ServiceProvider> providerBuffer = null;

    @Autowired
    public List<TripServiceProvider> providers;

    @Override
    public List<TripService> find(TripService candidate) {


        List<Callable<List<TripService>>> tasks = createLookupTasks(candidate);
        List<TripService> result = collectData(tasks);

        return result;
    }

    @Override
    public boolean isProcessable(de.tpaxx.interfaces.services.Service candidate) {
        return candidate instanceof TripService;
    }


    @Override
    public List<ServiceProvider> getProviders() {
        if (providerBuffer == null) {
            buildProviderBuffer();
        }

        return providerBuffer;
    }

    private void buildProviderBuffer() {
        providerBuffer = new ArrayList<>();
        providers.forEach(tripServiceProvider -> providerBuffer.add(tripServiceProvider));
    }
}
