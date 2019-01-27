package ru.sberbank.chava.smarthome.db;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import ru.sberbank.chava.smarthome.pojo.Power;

//@Controller    // This means that this class is a Controller
//@RequestMapping(path="/smart-home") // This means URL's start with /demo (after Application path)
public class SensorController {
	@Autowired // This means to get the bean called userRepository
	           // Which is auto-generated by Spring, we will use it to handle the data
	private PowerRepository powerRepository;

	@GetMapping(path="/addTest") // Map ONLY GET Requests
	public @ResponseBody String addNewUserTest () {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		Power n = new Power();
		n.setTime_period(1);
		n.setCount_power(100);
		return "Saved";
	}

	@GetMapping(path="/add") // Map ONLY GET Requests
	public @ResponseBody String addNewPower (@RequestParam String name
			, @RequestParam String email) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request

		Power n = new Power();
		n.setTime_period(1);
		n.setCount_power(100);
		powerRepository.save(n);
		return "Saved";
	}

	@GetMapping(path="/all")
	public @ResponseBody Iterable<Power> getAllUsers() {
		// This returns a JSON or XML with the users
		return powerRepository.findAll();
	}


}