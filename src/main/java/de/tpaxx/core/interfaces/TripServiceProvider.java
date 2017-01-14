package de.tpaxx.core.interfaces;

import de.tpaxx.core.interfaces.services.Service;
import de.tpaxx.core.interfaces.services.TripService;

/**
 * Created by wasp on 1/9/17.
 */
public abstract class TripServiceProvider implements ServiceProvider<TripService> {
    @Override
    public boolean isProcessable(Service candidate) {
        return candidate instanceof TripService;
    }
}
