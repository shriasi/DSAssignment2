package com.sliit.shoppingplatform.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sliit.shoppingplatform.entity.Registration;
import com.sliit.shoppingplatform.service.RegistrationService;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/registration")
public class RegistrationController {

	@Autowired
	private RegistrationService registrationService;
	
	@PostMapping("/save")
	public Registration saveCartItem(@RequestBody Registration registration) {
		return registrationService.saveUser(registration);
	}
	
	@GetMapping("/list")
	public List<Registration> getUsers() {
		return registrationService.getUsers();
	}
	
	@PutMapping("/update/{item_id}")
	public Registration updateUser(@RequestBody Registration registration, @PathVariable("item_id") Long id) {
		return registrationService.updateUser(id, registration);
	}
	
	@DeleteMapping("/delete/{item_id}")
	public String deleteUser(@PathVariable("item_id") Long id) {
		registrationService.deleteUser(id);
		 return "deleted succesfully.";
	}
}