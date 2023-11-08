package spring.guro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.guro.entity.Cart;

import java.util.List;

public interface CartRepository extends JpaRepository<Cart, Integer> {

    List<Cart> findByEmailOrderByDateDesc(String email);
    void deleteByEmail(String email);
    Cart findByEmailAndProductName(String email, String productName);
    Cart findByIdAndEmail(Integer id, String email);
    List<Cart> findByEmail(String email);
}
