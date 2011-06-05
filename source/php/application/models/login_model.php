<?php

class login_model extends CI_Model {

	public function __construct(){
		parent::__construct();
		$this->load->library('session');
		$this->load->database();
	}
	
	/*public function is_logged_in(){
		$user = $this->session->userdata('username');
		$session = $this->session->userdata('session_id');
		$ip_address = $this->session->userdata('ip_address');
		$logged_in = $this->session->userdata('logged_in');
		if(!($session)){
			return false;
		}		
		if(!($user)){
			return false;
		}
		if(!($logged_in)){
			return false;
		}
		$sql = "select status from users where hid=?";
		$query = $this->db->query($sql,array($user));
		$row = $query->row();
		if($row->status==0){
			return false;
		}
		return true;
	}*/
	
	public function log_in($user,$password){
		
		$sql = "select username,password,hid from users where username=\"$user\" and password=\"$password\"";
		$query = $this->db->query($sql);
		
		if($query->num_rows()==0){
			return false;
		}
		
		$row = $query->row();
		$hid = $row->hid;
		$this->session->set_userdata('username',$hid);
		$this->session->set_userdata('logged_in',1);
		$this->db->query($sql);
		return true;
	}
	
	public function register($username,$password,$latitude,$longitude,$description){
		$sql = "insert into users(username,password,hid,latitude,longitude,bio) values (?,?,?,?,?,?)";
		$this->db->query($sql,array("$username",sha1("$password"),sha1("$username"),$latitude,$longitude,"$description"));
		
	}
}
?>