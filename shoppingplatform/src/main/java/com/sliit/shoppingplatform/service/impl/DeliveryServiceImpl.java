package com.sliit.shoppingplatform.service.impl;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sliit.shoppingplatform.entity.DeliveryServiceItem;
import com.sliit.shoppingplatform.repository.DeliveryServiceRepository;
import com.sliit.shoppingplatform.service.DeliveryService;


@Service
public class DeliveryServiceImpl implements DeliveryService {

	@Autowired
	private DeliveryServiceRepository deliveryItemRepository;

	@Override 
	public DeliveryServiceItem saveDeliveryItem(DeliveryServiceItem deliveryServiceItem) {
	
		return deliveryItemRepository.save(deliveryServiceItem);
	}

	@Override
	public List<DeliveryServiceItem> getDeliveryItems() {
		
		return deliveryItemRepository.findAll();
	}

	@Override
	public DeliveryServiceItem updateDeliveryItem(Long id, DeliveryServiceItem deliveryServiceItem) {
		Optional<DeliveryServiceItem> findById = deliveryItemRepository.findById(id);
		
		if (findById.isPresent()) {
			
			DeliveryServiceItem deliveryItemEntity = findById.get();
			
			if (deliveryItemEntity.getCustomer_name() != null && !deliveryServiceItem.getCustomer_name().isEmpty())
				deliveryItemEntity.setCustomer_name(deliveryServiceItem.getCustomer_name());
			
			if (deliveryServiceItem.getCustomer_address() != null && !deliveryServiceItem.getCustomer_name().isEmpty())
				deliveryItemEntity.setCustomer_address(deliveryServiceItem.getCustomer_address());		
			
			if (deliveryServiceItem.getCustomer_contact() != 0)
				deliveryItemEntity.setCustomer_contact(deliveryServiceItem.getCustomer_contact());
			
			if (deliveryServiceItem.getDelivery_charges() != 0)
				deliveryItemEntity.setDelivery_charges(deliveryServiceItem.getDelivery_charges());
			
			return deliveryItemRepository.save(deliveryItemEntity);
		}
		
		return null;
	} 

	@Override
	public void deleteDeliveryItem(Long id) {
		deliveryItemRepository.deleteById(id);
	}


}