package spring.guro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import spring.guro.entity.Notice;

public interface NoticeRepository extends JpaRepository<Notice, Integer> {

}
