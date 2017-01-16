package de.tpaxx.core.interfaces;

import de.tpaxx.core.interfaces.services.Service;

import java.util.List;

/**
 * Created by wasp on 1/7/17.
 */
public interface ServiceProvider<T extends Service> {
    List<T> find(T service);

    boolean isProcessable(Service candidate);
}
