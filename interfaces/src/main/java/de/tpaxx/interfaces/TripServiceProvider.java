package de.tpaxx.interfaces;

import de.tpaxx.interfaces.services.Service;
import de.tpaxx.interfaces.services.TripService;

public abstract class TripServiceProvider implements ServiceProvider<TripService> {
    @Override
    public boolean isProcessable(Service candidate) {
        return candidate instanceof TripService;
    }
}
