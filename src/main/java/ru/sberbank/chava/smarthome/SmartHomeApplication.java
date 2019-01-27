package ru.sberbank.chava.smarthome;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;

@SpringBootApplication
public class SmartHomeApplication {
	private static final Logger log = LoggerFactory.getLogger(SmartHomeApplication.class);

	@Autowired
	private static JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		SpringApplication.run(SmartHomeApplication.class, args);

		List<Map<String, Object>> answer = jdbcTemplate.queryForList("select 1 from dual");
		log.info("" + answer.size());
	}

}

