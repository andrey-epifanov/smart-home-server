package ru.sberbank.chava.smarthome.db;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import ru.sberbank.chava.smarthome.server.SensorController;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

/**
 * Created by Андрей on 03.02.2019.
 */
@Repository
public class TablePower {
    private static final Logger log = LoggerFactory.getLogger(TablePower.class);

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");

    private final static String INSERT_POWER = "INSERT INTO Power\n" +
            "(`time_period`,\n" +
            "`count_power`,\n" +
            "`time_current`)\n" +
            "VALUES\n" +
            "( <{time_period:}>,\n" +
            "<{count_power:}>,\n" +
            "<{time_current:}>)";

    private final static String SELECT_MAX_POWER =
            "SELECT count_power FROM Power " +
                    "WHERE time_current IN (SELECT MAX(time_current) FROM Power)";

    @Transactional
    public void insertPower(int timePeriod, int countPower, Date timeCurrent) {
        String insert = INSERT_POWER
                .replace("<{time_period:}>", Integer.toString(timePeriod))
                .replace("<{count_power:}>", Integer.toString(countPower))
                .replace("<{time_current:}>", "'" + simpleDateFormat.format(timeCurrent) + "'");
        log.info("insert = " + insert);
        jdbcTemplate.execute(insert);
    }

    @Transactional(readOnly=true)
    public List<Map<String, Object>> findAll() {
        List<Map<String, Object>> all = jdbcTemplate.queryForList(
                SELECT_MAX_POWER
        );
        return all;
    }
}
