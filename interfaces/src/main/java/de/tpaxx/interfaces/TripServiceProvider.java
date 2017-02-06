package de.tpaxx.interfaces;

import de.tpaxx.interfaces.services.Service;
import de.tpaxx.interfaces.services.TripService;

/**
 * Created by wasp on 1/9/17.
 */
public abstract class TripServiceProvider implements ServiceProvider<TripService> {
    @Override
    public boolean isProcessable(Service candidate) {
        return candidate instanceof TripService;
    }
}
