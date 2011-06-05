<?php

class Register extends CI_Controller{
	function __construct(){
		parent::__construct();
		$this->load->library('session');
		$this->load->model('login_model');
	}
	
	function index(){
		
		$username = $this->input->post('username');
		$password = $this->input->post('password');
		$latitude = $this->input->post('latitude');
		$longitude = $this->input->post('longitude');
		$description = $this->input->post('description');
		$contact = $this->input->post('contact');
		$location = $this->input->post('location');
		
		$this->login_model->register($username,$password,$latitude,$longitude,$description,$contact,$location);
	}
}
