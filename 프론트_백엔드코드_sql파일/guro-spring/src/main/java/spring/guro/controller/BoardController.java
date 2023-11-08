package spring.guro.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import spring.guro.entity.FeedBack;
import spring.guro.entity.Notice;
import spring.guro.repository.FeedBackRepository;
import spring.guro.repository.NoticeRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;

// FeedBack, Notice 통합
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class BoardController {

    private final NoticeRepository noticeRepository;
    private final FeedBackRepository feedBackRepository;

    @PostMapping("/kokee/notice/add")
    public void addNotice(@RequestBody Map<String, String> map) {
        Notice notice = new Notice();
        notice.setTitle(map.get("subject"));
        notice.setText(map.get("content"));
        notice.setEmail(map.get("email"));
        notice.setDate(LocalDateTime.now());
        noticeRepository.save(notice);
    }

    @GetMapping("/kokee/notice/list")
    public List<Notice> listNotice() {
        return noticeRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

//    @GetMapping("/kokee/notice/list/main/{id}")
//    public String listOneNotice(@PathVariable("id") Integer id) {
//        System.out.println(id);
//        Optional<Notice> notice = noticeRepository.findById(id);
//        if (notice.isPresent()) {
//            Notice n = notice.get();
//            System.out.println(n.getTitle());
//            return n.getTitle();
//        } else {
//            return "null";
//        }
//    }

    @PutMapping("/kokee/notice/update/{id}")
    public void updateNotice(@PathVariable("id") Integer id,
                                          @RequestBody Map<String, String> map) {
        Optional<Notice> notice = noticeRepository.findById(id);
        if (notice.isPresent()) {
            Notice n = notice.get();
            n.setText(map.get("content"));
            n.setTitle(map.get("subject"));
            n.setDate(LocalDateTime.now());
            noticeRepository.save(n);
        }
    }

    @DeleteMapping("/kokee/notice/delete/{id}")
    public void deleteNotice(@PathVariable("id") Integer id) {
        noticeRepository.deleteById(id);
    }

//
//
//

    @PostMapping("/kokee/feed_back/add")
    public void addFeedBack(@RequestBody Map<String, String> map) {
        System.out.println(map);
        FeedBack feedBack = new FeedBack();
        feedBack.setTitle(map.get("subject"));
        feedBack.setText(map.get("content"));
        feedBack.setEmail(map.get("email"));
        feedBack.setDate(LocalDateTime.now());
        feedBackRepository.save(feedBack);
    }

    @GetMapping("/kokee/feed_back/list")
    public List<FeedBack> listFeedBack() {
        return feedBackRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @PutMapping("/kokee/feed_back/update/{id}")
    public void updateFeedBack(@PathVariable("id") Integer id,
                             @RequestBody Map<String, String> map) {
        Optional<FeedBack> feedBack = feedBackRepository.findById(id);
        if (feedBack.isPresent()) {
            FeedBack f = feedBack.get();
            f.setText(map.get("subject"));
            f.setTitle(map.get("content"));
            f.setDate(LocalDateTime.now());
            feedBackRepository.save(f);
        }
    }

    @DeleteMapping("/kokee/feed_back/delete/{id}")
    public void deleteFeedBack(@PathVariable("id") Integer id) {
        feedBackRepository.deleteById(id);
    }

}
