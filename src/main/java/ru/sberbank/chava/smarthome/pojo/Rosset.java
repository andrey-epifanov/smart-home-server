package ru.sberbank.chava.smarthome.pojo;

/**
 * Created by Андрей on 27.01.2019.
 */
public class Rosset {
//    id_rozetka;
//    name;
    private int id;
    private String name;
    private boolean state;

    public Rosset(int id, String name, boolean state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isState() {
        return state;
    }

    public void setState(boolean state) {
        this.state = state;
    }
}
