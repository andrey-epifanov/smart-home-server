package ru.sberbank.chava.smarthome.server;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.sberbank.chava.smarthome.db.TablePower;
import ru.sberbank.chava.smarthome.pojo.Data;
import ru.sberbank.chava.smarthome.pojo.Power;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

@Controller    // This means that this class is a Controller
@RequestMapping(path="/smart-home") // This means URL's start with /demo (after Application path)
public class SensorController {
	private static final Logger log = LoggerFactory.getLogger(SensorController.class);

	@Autowired
	private TablePower tablePower;

	private Gson gson = new Gson();

	@PostMapping(path="/addData")
	public @ResponseBody String addData(@RequestBody Object objData) {
		String jsonData = gson.toJson(objData);
		log.info(jsonData);

		Data data = gson.fromJson(jsonData, Data.class);

		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		String currDate = simpleDateFormat.format(new Date(System.currentTimeMillis()));
		log.info("CurrDate = " + currDate);

		tablePower.insertPower(
				data.getPower().getPeriod(),
				data.getPower().getValue(),
				new Date(System.currentTimeMillis())
		);
		return currDate + ":" + "0101";
	}

	@CrossOrigin(origins = "*")
	@GetMapping(path="/power")
	public @ResponseBody String getPower() {
		Object objPower = tablePower.findAll()
				.get(0).get("count_power");
		log.info("Last Power = " + objPower);

		return objPower.toString();
	}

}
