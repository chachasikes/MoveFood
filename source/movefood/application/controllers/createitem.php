<?php

class Createitem extends CI_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model("claim_model");
		$this->load->library("session");
	}
	
	function index(){
		$food_name = $this->input->post('food_name');
		$description = $this->input->post('description');
		$quantity = $this->input->post('quantity');
		$units = $this->input->post('units');
		$perishable = $this->input->post('perishable');
		$expiration = $this->input->post('expiration');
		$location_description = $this->input->post('location_description');
		$location = $this->input->post('default_location');
		$notes = $this->input->post('notes');
		$contact = $this->input->post('default_contact');
		$this->claim_model->insert_item($food_name,$description,$quantity,$units,$perishable,$expiration,$location_description,$location,$notes,$contact);
	}
}
