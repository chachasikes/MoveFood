<?php

class Login extends CI_Controller {
	
	public function __construct(){
		parent::__construct();
		$this->load->library('session');
		$this->load->model('login_model');
		$this->load->helper('url');
		$this->load->helper('form');
		
	}
	
	public function index(){
		echo "Here";
		$username = $this->input->post('username');
		$password = $this->input->post('password');
		$logged_in = $this->login_model->log_in($username,sha1($password));
		if($logged_in){
			$data = array("valid"=>"true");
			echo json_encode($data);
		}
		else{
			$data = array("valid"=>"false");
			echo json_encode($data);	
		}
	}
	
	public function logout(){
		$logged_in = $this->session->userdata("logged_in");
		$username = $this->session->userdata("username");
		$this->session->sess_destroy();
	} 
	
	public function test_login(){
		$this->load->view("testlogin");
	}
}

?>