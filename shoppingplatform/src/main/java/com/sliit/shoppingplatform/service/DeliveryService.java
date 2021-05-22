package com.sliit.shoppingplatform.service;

import java.util.List;

import com.sliit.shoppingplatform.entity.DeliveryServiceItem;


public interface DeliveryService {

	public DeliveryServiceItem saveDeliveryItem(DeliveryServiceItem deliveryServiceItem);

	public List<DeliveryServiceItem> getDeliveryItems();

	public DeliveryServiceItem  updateDeliveryItem(Long id, DeliveryServiceItem deliveryServiceItem);

	public void deleteDeliveryItem(Long id);

}