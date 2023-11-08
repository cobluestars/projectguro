package spring.guro.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.guro.entity.Cart;
import spring.guro.entity.Member;
import spring.guro.repository.CartRepository;
import spring.guro.repository.MemberRepository;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CartController {

    private final CartRepository cartRepository;
    private final MemberRepository memberRepository;

    @PostMapping("/kokee/carts")
    public ResponseEntity<?> addProduct(@RequestBody Map<String, String> map) {
        System.out.println(map);
        Cart cart = new Cart();
        cart.setProductName(map.get("product_name"));
        cart.setMount(Integer.parseInt(map.get("mount")));
        cart.setPrice(Double.parseDouble(map.get("price")));
        cart.setOrderWhether(0);
        cart.setDate(LocalDateTime.now());
        cart.setEmail(map.get("email"));
        cartRepository.save(cart);
        return ResponseEntity.ok("success");
    }

    @GetMapping("/kokee/carts/{email}")
    public List<Cart> getlist(@PathVariable("email") String email) {
        return cartRepository.findByEmailOrderByDateDesc(email);
    }

    @DeleteMapping("/kokee/carts/delete/{email}")
    @Transactional
    public void deleteList(@PathVariable("email") String email) {
        cartRepository.deleteByEmail(email);
    }

    @DeleteMapping("/kokee/carts/delete_one/{id}")
    public void deleteOne(@PathVariable("id") Integer id) {
        cartRepository.deleteById(id);
    }

    @PutMapping("/kokee/carts/update/{email}")
    public void updateOne(@PathVariable("email") String email, @RequestBody Map <String, String> map) {
        System.out.println(map);
        Cart cart = cartRepository.findByIdAndEmail(Integer.parseInt(map.get("id")), email);
        Integer inputMount = Integer.parseInt(map.get("updateMount"));
        Double inputPrice = Double.parseDouble(map.get("updatePrice"));
        cart.setMount(inputMount);
        cart.setPrice(inputPrice);
        cartRepository.save(cart);
    }

}
