package spring.guro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.guro.entity.Orders;

import java.time.LocalDateTime;
import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Integer> {
    List<Orders> findAllByEmailAndDateBetween(String email, LocalDateTime date, LocalDateTime date2);
    List<Orders> findAllByDateBetween(LocalDateTime start, LocalDateTime end);
    List<Orders> findByEmail(String email);
}
