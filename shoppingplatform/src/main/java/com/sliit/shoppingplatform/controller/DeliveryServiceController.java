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

import com.sliit.shoppingplatform.entity.DeliveryServiceItem;
import com.sliit.shoppingplatform.service.DeliveryService;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/delivery")
public class DeliveryServiceController {

	@Autowired
	private DeliveryService deliveryService;
	
	@PostMapping("/save")
	public DeliveryServiceItem saveDeliveryItem(@RequestBody DeliveryServiceItem deliveryServiceItem) {
		return deliveryService.saveDeliveryItem(deliveryServiceItem);
	}
	
	@GetMapping("/list")
	public List<DeliveryServiceItem> getDeliveryItems() {
		return deliveryService.getDeliveryItems();
	}
	
	@PutMapping("/update/{item_id}")
	public DeliveryServiceItem updateDeliveryItem(@RequestBody DeliveryServiceItem deliveryServiceItem, @PathVariable("item_id") Long id) {
		return deliveryService.updateDeliveryItem(id, deliveryServiceItem);
	}
	
	@DeleteMapping("/delete/{item_id}")
	public String deleteDeliveryItem(@PathVariable("item_id") Long id) {
		deliveryService.deleteDeliveryItem(id);
		 return "deleted succesfully.";
	}
}