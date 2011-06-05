<?php

class List_items extends CI_Controller {
	function __construct(){
		parent::__construct();
		$this->load->model('claim_model');
	}
	
	function index(){
		$id = $this->input->post("id");
		$this->claim_model->list_items($id);
	}
}
