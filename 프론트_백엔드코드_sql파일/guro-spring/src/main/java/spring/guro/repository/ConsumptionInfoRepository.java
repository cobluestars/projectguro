package spring.guro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.guro.entity.ConsumptionInfo;

public interface ConsumptionInfoRepository extends JpaRepository<ConsumptionInfo, Integer> {

    ConsumptionInfo findByProductname(String productName);

}
