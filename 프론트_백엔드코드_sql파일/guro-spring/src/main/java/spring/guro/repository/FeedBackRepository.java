package spring.guro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.guro.entity.FeedBack;
import spring.guro.entity.Orders;

public interface FeedBackRepository extends JpaRepository<FeedBack, Integer> {
//    FeedBack deleteByEmail(String email);
    FeedBack findByEmail(String email);
}
