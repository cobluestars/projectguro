package spring.guro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.guro.entity.Consumption;

public interface ConsumptionRepository extends JpaRepository<Consumption, Integer> {

}
