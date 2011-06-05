<?php

class List_items extends CI_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('claim_model');
	}
	
	function index(){
		$this->claim_model->list_items();
	}
}
