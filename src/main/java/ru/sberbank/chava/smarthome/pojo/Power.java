package ru.sberbank.chava.smarthome.pojo;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by Андрей on 27.01.2019.
 */

public class Power {
//    @Id
//    @GeneratedValue(strategy= GenerationType.AUTO)

    private int id_rozetka;
    private int time_period;
    private int count_power;

    public void setId_rozetka(int id_rozetka) {
        this.id_rozetka = id_rozetka;
    }

    public void setTime_period(int time_period) {
        this.time_period = time_period;
    }

    public void setCount_power(int count_power) {
        this.count_power = count_power;
    }

    public int getId_rozetka() {
        return id_rozetka;
    }

    public int getTime_period() {
        return time_period;
    }

    public int getCount_power() {
        return count_power;
    }
}
