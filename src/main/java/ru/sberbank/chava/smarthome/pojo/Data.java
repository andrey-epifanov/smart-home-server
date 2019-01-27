package ru.sberbank.chava.smarthome.pojo;

import java.util.List;

/**
 * Created by Андрей on 27.01.2019.
 */
public class Data {
    private Power power;
    private List<Rosset> rossets;

    public Power getPower() {
        return power;
    }

    public void setPower(Power power) {
        this.power = power;
    }

    public List<Rosset> getRossets() {
        return rossets;
    }

    public void setRossets(List<Rosset> rossets) {
        this.rossets = rossets;
    }
}
