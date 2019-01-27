package ru.sberbank.chava.smarthome.db;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.sberbank.chava.smarthome.SmartHomeApplication;
import ru.sberbank.chava.smarthome.pojo.Data;
import ru.sberbank.chava.smarthome.pojo.Power;
import java.sql.Date;
import java.text.SimpleDateFormat;

@Controller    // This means that this class is a Controller
@RequestMapping(path="/smart-home") // This means URL's start with /demo (after Application path)
public class SensorController {
	private static final Logger log = LoggerFactory.getLogger(SensorController.class);

	private Gson gson = new Gson();

	private final static String INSERT_POWER = "INSERT INTO `Power1`\n" +
			"(`time_period`,\n" +
			"`count_power`,\n" +
			"`time_current`)\n" +
			"VALUES\n" +
			"( <{time_period:}>,\n" +
			"<{count_power:}>,\n" +
			"<{time_current:}>)";
	private final static String INSERT_ROSSET = "INSERT INTO `Rozetka`\n" +
			"(`id`,\n" +
			"`name`,\n" +
			"`state`)\n" +
			"VALUES\n" +
			"(<{id:}>,\n" +
			"<{name:}>,\n" +
			"<{state:}>) ";

	private final static String SELECT_MAX_POWER =
			"SELECT count_power FROM Power1 " +
			"WHERE time_current IN (SELECT MAX(time_current) FROM Power1)";

	@GetMapping(path="/addTest") // Map ONLY GET Requests
	public @ResponseBody String addNewUserTest () {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		Power n = new Power(1, 100);
		return "Saved";
	}

	@PostMapping(path="/addData")
	public @ResponseBody String addData (@RequestBody Object objData) {
		String jsonData = gson.toJson(objData);
		System.out.println(jsonData);

		Data data = gson.fromJson(jsonData, Data.class);// (Data)objData;

		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		String currDate = simpleDateFormat.format(new Date(System.currentTimeMillis()));
		System.out.println("CurrDate = " + currDate);
		DBsinglton.jdbcTemplate.execute(
				INSERT_POWER
						.replace("<{time_period:}>", Integer.toString(data.getPower().getPeriod()))
						.replace("<{count_power:}>", Integer.toString(data.getPower().getValue()))
						.replace("<{time_current:}>", "'" + currDate + "'")
		);

		Power n = new Power(1, 100);
		n.setPeriod(1);
		n.setValue(100);
		//powerRepository.save(n);
		return currDate + ":" + "0101";
	}

	@CrossOrigin(origins = "*")
	@GetMapping(path="/power")
	public @ResponseBody String getPower() {
		Object objPower = DBsinglton.jdbcTemplate.queryForList(
				SELECT_MAX_POWER
			).get(0).get("count_power");
		log.info("Last Power = " + objPower);

		return objPower.toString();
	}

}
