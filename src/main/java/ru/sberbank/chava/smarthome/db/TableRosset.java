package ru.sberbank.chava.smarthome.db;

/**
 * Created by Андрей on 03.02.2019.
 */
public class TableRosset {
    private final static String INSERT_ROSSET = "INSERT INTO `Rozetka`\n" +
            "(`id`,\n" +
            "`name`,\n" +
            "`state`)\n" +
            "VALUES\n" +
            "(<{id:}>,\n" +
            "<{name:}>,\n" +
            "<{state:}>) ";
}
