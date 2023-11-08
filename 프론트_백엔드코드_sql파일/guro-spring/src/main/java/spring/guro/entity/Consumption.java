package spring.guro.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Consumption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ColumnDefault("1")
    private Integer cup;

    private String productname;

    @ColumnDefault("0")
    private Double milk;

    @ColumnDefault("0")
    private Double condensedmilk;

    @ColumnDefault("0")
    private Double tealeaf;

    @ColumnDefault("0")
    private Double sugar;

    @ColumnDefault("0")
    private Double honey;

    @ColumnDefault("0")
    private Double oreo;

    @ColumnDefault("0")
    private Double bean;

    @ColumnDefault("0")
    private Double coconut;

    @ColumnDefault("0")
    private Double greentea;

    @ColumnDefault("0")
    private Double matcha;

    @ColumnDefault("0")
    private Double strawberry;

    @ColumnDefault("0")
    private Double brownsugar;

    @ColumnDefault("0")
    private Double sweetcloud;

    @ColumnDefault("0")
    private Double dalgonafoam;

    @ColumnDefault("0")
    private Double dragonfruit;

    @ColumnDefault("0")
    private Double oolong;

    @ColumnDefault("0")
    private Double peach;

    @ColumnDefault("0")
    private Double mango;

    @ColumnDefault("0")
    private Double lychee;

    @ColumnDefault("0")
    private Double whitegrape;

    @ColumnDefault("0")
    private Double mangopassionfruit;

    @ColumnDefault("0")
    private Double foseflavor;

    @ColumnDefault("0")
    private Double strawberryflavor;

    @ColumnDefault("0")
    private Double lemonflavor;

    @ColumnDefault("0")
    private Double roseflavor;

    @ColumnDefault("0")
    private Double lycheeflavor;

    @ColumnDefault("0")
    private Double kiwiflavor;

    @ColumnDefault("0")
    private Double passionfruitflavor;

    @ColumnDefault("0")
    private Double grapefruitflavor;

    @ColumnDefault("0")
    private Double taro;

    @ColumnDefault("0")
    private Double pinacolada;

    @ColumnDefault("0")
    private Double syrup;

    @ColumnDefault("0")
    private Double cream;

    @ColumnDefault("0")
    private Double orangetea;

    @ColumnDefault("0")
    private Double passionfruitjam;

    @ColumnDefault("0")
    private Double blacktealeaf;

    @ColumnDefault("0")
    private Double espresso;

    private String orderId;

}
