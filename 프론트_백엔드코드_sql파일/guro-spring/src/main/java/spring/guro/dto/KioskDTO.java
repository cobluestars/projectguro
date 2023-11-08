package spring.guro.dto;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class KioskDTO {
    private LocalDateTime date;
    private String name;
    private Integer count;
    private Double price;
    private String email;
}
