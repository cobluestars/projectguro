package spring.guro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.guro.entity.Member;

public interface MemberRepository extends JpaRepository<Member, Integer> {

    Member findByEmail(String email);

}
