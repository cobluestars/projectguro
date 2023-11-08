package spring.guro.controller;

import lombok.RequiredArgsConstructor;
import org.aspectj.weaver.ast.Or;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spring.guro.dto.OrdersDTO;
import spring.guro.entity.Consumption;
import spring.guro.entity.ConsumptionInfo;
import spring.guro.entity.Orders;
import spring.guro.repository.CartRepository;
import spring.guro.repository.ConsumptionInfoRepository;
import spring.guro.repository.ConsumptionRepository;
import spring.guro.repository.OrdersRepository;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class OrdersController {

    private final OrdersRepository ordersRepository;
    private final CartRepository cartRepository;
    private final ConsumptionInfoRepository consumptionInfoRepository;
    private final ConsumptionRepository consumptionRepository;

//    @PostMapping("/kokee/orders/{email}")
//    @Transactional
//    public void addOrders(@PathVariable("email") String email, @RequestBody List<OrdersDTO> getData) {
//        System.out.println(getData);
//        for (OrdersDTO getDatum : getData) {
//            Orders orders = new Orders();
//            orders.setProductName(getDatum.getProductName());
//            orders.setMount(getDatum.getMount());
//            orders.setPrice(getDatum.getPrice());
//            orders.setEmail(getDatum.getEmail());
//            orders.setDate(LocalDateTime.now());
//            ordersRepository.save(orders);
//        }
//        cartRepository.deleteByEmail(email);

    @PostMapping("/kokee/orders/{email}")
    @Transactional
    public void addOrders(@PathVariable("email") String email, @RequestBody List<OrdersDTO> getData) {
        for (OrdersDTO getDatum : getData) {
            Orders orders = new Orders();
            orders.setProductName(getDatum.getProductName());
            orders.setMount(getDatum.getMount());
            for (int i = 0; i < getDatum.getMount(); i++) {
                ConsumptionInfo consumptionInfo = consumptionInfoRepository.findByProductname(getDatum.getProductName());
                System.out.println(consumptionInfo);
                System.out.println(consumptionInfo.getCup());
                Consumption consumption = new Consumption();
                consumption.setCup(consumptionInfo.getCup());
                consumption.setProductname(consumptionInfo.getProductname());
                consumption.setMilk(consumptionInfo.getMilk());
                consumption.setCondensedmilk(consumptionInfo.getCondensedmilk());
                consumption.setTealeaf(consumptionInfo.getTealeaf());
                consumption.setSugar(consumptionInfo.getSugar());
                consumption.setHoney(consumptionInfo.getHoney());
                consumption.setOreo(consumptionInfo.getOreo());
                consumption.setBean(consumptionInfo.getBean());
                consumption.setCoconut(consumptionInfo.getCoconut());
                consumption.setGreentea(consumptionInfo.getGreentea());
                consumption.setMatcha(consumptionInfo.getMatcha());
                consumption.setStrawberry(consumptionInfo.getStrawberry());
                consumption.setBrownsugar(consumptionInfo.getBrownsugar());
                consumption.setSweetcloud(consumptionInfo.getSweetcloud());
                consumption.setDalgonafoam(consumptionInfo.getDalgonafoam());
                consumption.setDragonfruit(consumptionInfo.getDragonfruit());
                consumption.setOolong(consumptionInfo.getOolong());
                consumption.setPeach(consumptionInfo.getPeach());
                consumption.setMango(consumptionInfo.getMango());
                consumption.setLychee(consumptionInfo.getLychee());
                consumption.setWhitegrape(consumptionInfo.getWhitegrape());
                consumption.setMangopassionfruit(consumptionInfo.getMangopassionfruit());
                consumption.setFoseflavor(consumptionInfo.getFoseflavor());
                consumption.setStrawberryflavor(consumptionInfo.getStrawberryflavor());
                consumption.setLemonflavor(consumptionInfo.getLemonflavor());
                consumption.setRoseflavor(consumptionInfo.getRoseflavor());
                consumption.setLycheeflavor(consumptionInfo.getLycheeflavor());
                consumption.setKiwiflavor(consumptionInfo.getKiwiflavor());
                consumption.setPassionfruitflavor(consumptionInfo.getPassionfruitflavor());
                consumption.setGrapefruitflavor(consumptionInfo.getGrapefruitflavor());
                consumption.setTaro(consumptionInfo.getTaro());
                consumption.setPinacolada(consumptionInfo.getPinacolada());
                consumption.setSyrup(consumptionInfo.getSyrup());
                consumption.setCream(consumptionInfo.getCream());
                consumption.setOrangetea(consumptionInfo.getOrangetea());
                consumption.setPassionfruitjam(consumptionInfo.getPassionfruitjam());
                consumption.setBlacktealeaf(consumptionInfo.getBlacktealeaf());
                consumption.setEspresso(consumptionInfo.getEspresso());
                consumptionRepository.save(consumption);
            }
            orders.setPrice(getDatum.getPrice());
            orders.setEmail(getDatum.getEmail());
            orders.setDate(LocalDateTime.now());
            ordersRepository.save(orders);
        }
        cartRepository.deleteByEmail(email);

//        getProductName()을 이용해서 해당 상품과 이름이 같은 consumption_info 테이블 참조 해서 row 가져옴
//        row를 가져와서 Consumption 테이블에 getMount 만큼 반복문을 돌려서 데이터 저장

    }

    @GetMapping("/kokee/orders/{email}")
    public List<Orders> getOrders(@PathVariable("email") String email,
                                  @RequestParam("start") @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime startDate,
                                  @RequestParam("end") @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss") LocalDateTime endDate) {
        return ordersRepository.findAllByEmailAndDateBetween(email, startDate.minusDays(1), endDate);
    }


}
