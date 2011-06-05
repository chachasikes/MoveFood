<?php

class My_items extends CI_Controller{
	function __construct(){
		parent::__construct();
		$this->load->model('claim_model');
	}
	
	function index(){
		$this->claim_model->user_items();
	}
}

