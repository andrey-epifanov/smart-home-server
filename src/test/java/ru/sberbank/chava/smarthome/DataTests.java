package ru.sberbank.chava.smarthome;

import com.google.gson.Gson;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.aspectj.EnableSpringConfigured;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.util.Assert;
import ru.sberbank.chava.smarthome.pojo.Data;
import ru.sberbank.chava.smarthome.pojo.Power;
import ru.sberbank.chava.smarthome.pojo.Rosset;

import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@EnableSpringConfigured
//@SpringBootApplication(exclude = SmartHomeApplication.class)
public class DataTests {

	@Test
	public void gennerateJsonTest() {
		Data data = new Data();
		data.setPower(new Power(1, 100));
		List<Rosset> rossets = new ArrayList<>();
		rossets.add(new Rosset(1, "kit", false));
		rossets.add(new Rosset(2, "bath", false));
		rossets.add(new Rosset(3, "room", false));
		rossets.add(new Rosset(4, "floor", true));
		data.setRossets(rossets);

		Gson gson = new Gson();
		String json = gson.toJson(data);
		System.out.println(json);
		Assert.hasText(json, "kit");
		Assert.hasText(json, "bath");
	}

	@Test
	public void timeTest() {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		System.out.println("CurrDate = " + simpleDateFormat.format(new Date(System.currentTimeMillis())));
	}

}

