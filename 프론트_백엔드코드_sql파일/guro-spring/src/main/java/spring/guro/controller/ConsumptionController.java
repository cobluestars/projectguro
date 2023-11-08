package spring.guro.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.guro.entity.Consumption;
import spring.guro.repository.ConsumptionRepository;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ConsumptionController {

    private final ConsumptionRepository consumptionRepository;

    @PostMapping("/kokee/consumption")
    public List<Consumption> getAndPost() {
        return consumptionRepository.findAll();
    }


}
