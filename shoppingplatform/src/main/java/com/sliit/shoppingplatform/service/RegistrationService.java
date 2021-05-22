package com.sliit.shoppingplatform.service;

import java.util.List;

import com.sliit.shoppingplatform.entity.Registration;

public interface RegistrationService {

	public Registration saveUser(Registration registration);

	public List<Registration> getUsers();

	public Registration  updateUser(Long id, Registration registration);

	public void deleteUser(Long id);

}