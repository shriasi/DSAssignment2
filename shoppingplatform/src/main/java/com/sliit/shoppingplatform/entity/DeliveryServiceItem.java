package com.sliit.shoppingplatform.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryServiceItem {

	@Id
	private Long id;
	private String customer_name;
	private String customer_address;
	private int customer_contact;
	private Double delivery_charges;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getCustomer_name() {
		return customer_name;
	}
	public void setCustomer_name(String customer_name) {
		this.customer_name = customer_name;
	}
	public String getCustomer_address() {
		return customer_address;
	}
	public void setCustomer_address(String customer_address) {
		this.customer_address = customer_address;
	}
	public int getCustomer_contact() {
		return customer_contact;
	}
	public void setCustomer_contact(int customer_contact) {
		this.customer_contact = customer_contact;
	}
	public Double getDelivery_charges() {
		return delivery_charges;
	}
	public void setDelivery_charges(Double delivery_charges) {
		this.delivery_charges = delivery_charges;
	}

	
}