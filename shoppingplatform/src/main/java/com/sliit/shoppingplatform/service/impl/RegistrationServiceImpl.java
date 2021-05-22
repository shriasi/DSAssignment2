package com.sliit.shoppingplatform.service.impl;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sliit.shoppingplatform.entity.Registration;
import com.sliit.shoppingplatform.repository.RegistrationRepository;
import com.sliit.shoppingplatform.service.RegistrationService;


@Service
public class RegistrationServiceImpl implements RegistrationService {

	@Autowired
	private RegistrationRepository registrationRepository;

	@Override 
	public Registration saveUser(Registration registration) {
	
		return registrationRepository.save(registration);
	}

	@Override
	public List<Registration> getUsers() {
		
		return registrationRepository.findAll();
	}

	@Override
	public Registration updateUser(Long id, Registration registration) {
		Optional<Registration> findById = registrationRepository.findById(id);
		
		if (findById.isPresent()) {
			
			Registration registrationEntity = findById.get();
			
			if (registrationEntity.getFirst_name() != null && !registration.getFirst_name().isEmpty())
				registrationEntity.setFirst_name(registration.getFirst_name());
			
			if (registration.getLast_name() != null && !registration.getFirst_name().isEmpty())
				registrationEntity.setLast_name(registration.getLast_name());		
			
			if (registration.getMobile_no() != 0)
				registrationEntity.setMobile_no(registration.getMobile_no());			
			
			if (registration.getUsername() != null && !registration.getUsername().isEmpty())
				registrationEntity.setUsername(registration.getUsername());			
			
			if (registration.getPassword() != null && !registration.getPassword().isEmpty())
				registrationEntity.setPassword(registration.getPassword());			
			
			return registrationRepository.save(registrationEntity);
		}
		
		return null;
	} 

	@Override
	public void deleteUser(Long id) {
		registrationRepository.deleteById(id);
	}


}