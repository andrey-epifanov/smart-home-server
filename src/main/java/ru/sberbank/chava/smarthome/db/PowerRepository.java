package ru.sberbank.chava.smarthome.db;

import org.springframework.data.repository.CrudRepository;
import ru.sberbank.chava.smarthome.pojo.Power;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface PowerRepository extends CrudRepository<Power, Integer> {

}
