package ru.sberbank.chava.smarthome;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.Map;

@SpringBootApplication
public class SmartHomeApplication {
	private static final Logger log = LoggerFactory.getLogger(SmartHomeApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SmartHomeApplication.class, args);

		ApplicationContext ctx
				= new ClassPathXmlApplicationContext("jdbcBeans.xml");

		JdbcTemplate jdbcTemplate = (JdbcTemplate) ctx.getBean("jdbcTemplate");

		List<Map<String, Object>> answer = jdbcTemplate.queryForList("select 1 from dual");
		log.info("Check JDBC connect . True ? = " + answer.size());
	}

}

