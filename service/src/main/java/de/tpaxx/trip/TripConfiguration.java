package de.tpaxx.trip;

import de.tpaxx.interfaces.TripServiceProvider;
import de.tpaxx.interfaces.services.TripService;
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

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
