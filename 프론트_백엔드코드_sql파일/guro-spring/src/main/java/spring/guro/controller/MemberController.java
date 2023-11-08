package spring.guro.controller;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.hibernate.criterion.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.guro.entity.Cart;
import spring.guro.entity.FeedBack;
import spring.guro.entity.Member;
import spring.guro.entity.Orders;
import spring.guro.repository.CartRepository;
import spring.guro.repository.FeedBackRepository;
import spring.guro.repository.MemberRepository;
import spring.guro.repository.OrdersRepository;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class MemberController {

    private final MemberRepository memberRepository;
    private final OrdersRepository ordersRepository;
    private final CartRepository cartRepository;
    private final FeedBackRepository feedBackRepository;

    @PostMapping("/kokee/join")
    public ResponseEntity<?> signup(@RequestBody Map <String, String> map) {
        try {
            System.out.println(map);
            Member member = new Member();
            member.setLocale(map.get("locale"));
            member.setUsername(map.get("userId"));
            member.setPassword(map.get("userPw"));
            member.setRealName(map.get("userName"));
            member.setPhoneNumber("010-" + map.get("phone02") + "-" + map.get("phone03"));
            member.setEmail(map.get("email01") + "@" + map.get("email02"));
            memberRepository.save(member);
            return ResponseEntity.ok("success");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("failed");
        }
    }

    @PostMapping("/kokee/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> map) {
        System.out.println(map);
        try {
            String reactEmail = map.get("email");
            String reactPass = map.get("password");

            Member member = memberRepository.findByEmail(reactEmail);
            String springEmail = member.getEmail();
            String springPass = member.getPassword();
            String springLocale = member.getLocale();
            String springName = member.getRealName();

            if (reactEmail.equals(springEmail) && reactPass.equals(springPass)) {;
                return ResponseEntity.ok().body(new MemberInfo(springLocale, springName));
            } else {
                return ResponseEntity.badRequest().body("failed");
            }

        } catch (Exception e) {
            return ResponseEntity.badRequest().body("failed");
        }
    }

    @Setter
    @Getter
    static class MemberInfo {
        final String locale;
        final String Name;

        public MemberInfo(String locale, String name) {
            this.locale = locale;
            Name = name;
        }
    }

    @GetMapping("/kokee/get_member/{email}")
    public Member getMember(@PathVariable("email") String email) {
        return memberRepository.findByEmail(email);
    }

    @PutMapping("/kokee/update_member")
    public ResponseEntity<?> updateMember(@RequestBody Map<String, String> map) {
        System.out.println(map);
        Member member = memberRepository.findByEmail(map.get("email"));
        member.setRealName(map.get("realname"));
        member.setPassword(map.get("password"));
        member.setEmail(map.get("email"));
        memberRepository.save(member);
        return ResponseEntity.ok("success");
    }

    @DeleteMapping("/kokee/delete_member/{email}")
    public ResponseEntity<?> deleteMember(@PathVariable("email") String email) {
        System.out.println(email);
        Member member = memberRepository.findByEmail(email);
        memberRepository.delete(member);
        List<Orders> orders = ordersRepository.findByEmail(email);
        ordersRepository.deleteAll(orders);
        List<Cart> carts = cartRepository.findByEmail(email);
        cartRepository.deleteAll(carts);

        return ResponseEntity.ok("delete success");
    }
}
