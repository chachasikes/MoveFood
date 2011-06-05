<?php

class List_claims extends CI_Controller {
	function __construct(){
		parent::__construct();
		$this->load->library('session');
		$this->load->model('claim_model');
	}
	
	function index(){
		$username = $this->session->userdata('username');
		//$username = "cb4abed6c07c79e2deeb7d5895ddc855894ab403";
		$this->claim_model->claim_list($username);
	}
}
