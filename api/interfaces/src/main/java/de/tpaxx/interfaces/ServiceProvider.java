package de.tpaxx.interfaces;

import de.tpaxx.interfaces.services.Service;

import java.util.List;

public interface ServiceProvider<T extends Service> {
    List<T> find(T service);

    boolean isProcessable(Service candidate);
}
