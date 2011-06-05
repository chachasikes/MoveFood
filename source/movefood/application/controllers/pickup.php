<?php

class Pickup extends CI_Controller {
	function __construct(){
		parent::__construct();
		$this->load->library('session');
		$this->load->model('claim_model');
	}
	
	function index(){
		$item_id = $this->input->post('item_id');
		$user_id = $this->session->userdata('username');
		$this->claim_model->pickup($item_id,$user_id);
	}
}
