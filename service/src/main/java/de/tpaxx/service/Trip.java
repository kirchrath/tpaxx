package de.tpaxx.service;

import de.tpaxx.interfaces.services.TripService;
import de.tpaxx.trip.MultiTripServiceProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Trip {
    public static final String BASE = "/trip";

    @Autowired
    public MultiTripServiceProvider provider;

    @RequestMapping(
            value = BASE + "/find",
            method = RequestMethod.GET
    )
    public List<TripService> find(
            @RequestParam(required = false) TripService candidate
    ) {
        return provider.find(candidate);
    }
}
