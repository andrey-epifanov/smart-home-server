package ru.sberbank.chava.smarthome.pojo;

/**
 * Created by Андрей on 27.01.2019.
 */
//@Entity
public class Power {
//    @Id
//    @GeneratedValue(strategy= GenerationType.AUTO)
//    @Id
//    @GeneratedValue(strategy= GenerationType.AUTO)
//    private Integer id;

    private int period;
    private int value;

    public Power(int period, int value) {
        this.period = period;
        this.value = value;
    }

    public void setPeriod(int period) {
        this.period = period;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public int getPeriod() {
        return period;
    }

    public int getValue() {
        return value;
    }
}
