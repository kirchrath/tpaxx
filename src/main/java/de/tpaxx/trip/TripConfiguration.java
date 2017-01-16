package de.tpaxx.trip;

import de.tpaxx.core.interfaces.TripServiceProvider;
import de.tpaxx.core.interfaces.services.TripService;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by wasp on 1/16/17.
 */
@Configuration
public class TripConfiguration {
    @ConditionalOnMissingBean(TripServiceProvider.class)
    @Bean
    TripServiceProvider defaultFooServiceImpl() {
        return new TripServiceProvider() {
            @Override
            public List<TripService> find(TripService service) {
                return new ArrayList<>();
            }
        };
    }
}
