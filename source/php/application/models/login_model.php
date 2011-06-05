<?php

class login_model extends CI_Model {

	public function __construct(){
		parent::__construct();
		$this->load->library('session');
		$this->load->database();
	}
	
	public function is_logged_in(){
		$user = $this->session->userdata('username');
		$session = $this->session->userdata('session_id');
		$ip_address = $this->session->userdata('ip_address');
		
		$username = $this->session->userdata('user');
		if(!($session)){
			
			return false;
			
		}		
		if(!($user)){
			
			return false;
		}
		
		
		$data = array("user"=>$username);
		return $data;
	}
	
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
		$this->session->set_userdata('user',$user);
		$hid = $this->session->userdata('username');
		
		
		return true;
	}
	
	public function register($username,$password,$latitude,$longitude,$description,$contact,$location_description){
		$sql = "insert into users(username,password,hid,latitude,longitude,bio,contact,location_description) values (?,?,?,?,?,?,?,?)";
		$this->db->query($sql,array("$username",sha1("$password"),sha1("$username"),$latitude,$longitude,"$description","$contact","$location_description"));
		
	}
	
	public function user_details(){
		$hid = $this->session->userdata("username");
		$sql = "select * from users where hid=\"$hid\"";
		$query = $this->db->query($sql);
		
		if($query->num_rows()==0){
			return false;
		}
		
		$row = $query->row();
		
		$user["username"] = $row->username;
		$user["latitude"] = $row->latitude;
		$user["longitude"] = $row->longitude;
		$user["contact"] = $row->contact;
		$user["description"] = $row->bio;
		$user["location_description"] = $row->location_description;
		
		echo json_encode($user);
	}
}
?>