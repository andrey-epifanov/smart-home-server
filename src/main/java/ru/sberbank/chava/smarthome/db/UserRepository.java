package ru.sberbank.chava.smarthome.db;

import org.springframework.data.repository.CrudRepository;
import ru.sberbank.chava.smarthome.pojo.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Integer> {

}
