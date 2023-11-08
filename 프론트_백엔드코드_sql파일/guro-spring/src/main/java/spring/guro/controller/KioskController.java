package spring.guro.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import spring.guro.dto.KioskDTO;
import spring.guro.dto.OrdersDTO;
import spring.guro.entity.Consumption;
import spring.guro.entity.ConsumptionInfo;
import spring.guro.entity.Orders;
import spring.guro.repository.ConsumptionInfoRepository;
import spring.guro.repository.ConsumptionRepository;
import spring.guro.repository.OrdersRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class KioskController {

    private final OrdersRepository ordersRepository;
    private final ConsumptionRepository consumptionRepository;
    private final ConsumptionInfoRepository consumptionInfoRepository;

    @PostMapping("/kokee/kiosk")
    public void addOrders(@RequestBody List<KioskDTO> kioskDTOS) {
        System.out.println(kioskDTOS);
        for (KioskDTO kioskDTO : kioskDTOS) {
            Orders orders = new Orders();
            orders.setProductName(kioskDTO.getName());
            orders.setMount(kioskDTO.getCount());
            for (int i = 0; i < kioskDTO.getCount(); i++) {
                ConsumptionInfo consumptionInfo = consumptionInfoRepository.findByProductname(kioskDTO.getName());
                System.out.println(consumptionInfo);
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
            orders.setPrice(kioskDTO.getPrice()*kioskDTO.getCount());
            orders.setEmail("Kiosk");
            orders.setDate(LocalDateTime.now());
            ordersRepository.save(orders);
        }
    }
}
