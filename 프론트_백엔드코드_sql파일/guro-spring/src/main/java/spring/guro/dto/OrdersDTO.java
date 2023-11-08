package spring.guro.dto;

import lombok.*;
import spring.guro.entity.Orders;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrdersDTO {
    private LocalDateTime date;
    private String productName;
    private Integer mount;
    private Double price;
    private String email;
}
