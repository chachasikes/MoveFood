<?php

class claim_model extends CI_Model {

	public function __construct(){
		parent::__construct();
		$this->load->library('session');
		$this->load->database();
	}
	
	public function claim($item_id,$username){
		$sql = "insert into claimed_list (food_id,username,claimed,picked_up,released) values ($item_id,\"$username\",true,false,false)";
		$this->db->query($sql);
	}
	
	public function release($item_id,$username){
		$sql = "update claimed_list set release=true where item_id=$item_id and username=\"$username\"";
		$this->db->query($sql);
	}
	
	public function pickup($item_id,$username){
		$sql = "update claimed_list set picked=true where item_id=$item_id and username=\"$username\"";
		$this->db-insert>query($sql);
	}
	
	public function list_items($id){
		if(empty($id)){
			$sql = "select food_list.food_id,food_name,description,locations,notes,quantity,perishable,expiration_date from food_list";
		}
		else{
			$sql = "select food_list.food_id,food_name,description,locations,notes,quantity,perishable,expiration_date from food_list where food_list.food_id=$id";
		}
		
		$query = $this->db->query($sql);
		$items = array();
		$i=0;
		foreach($query->result() as $row){
			$items[$i]["item_id"] = $row->food_id;
			$items[$i]["name"] = $row->food_name;
			$items[$i]["perishable"] = $row->perishable;
			$items[$i]["description"] = $row->description;
			$items[$i]["location"] = $row->locations;
			//$items[$i]["contact"] = $row->cell_phone;
			$items[$i]["expiration"] = $row->expiration_date;
			$items[$i]["notes"] = $row->notes;
			$items[$i]["quantity"] = $row->quantity;
			$i++;
		}
		echo json_encode($items);
	}
	
	public function claim_list($username){
		$sql = "select food_list.food_id,food_name,description,notes,quantity,perishable,expiration_date from food_list,claimed_list,users where claimed_list.user_id=\"$username\" and food_list.food_id = claimed_list.food_id and claimed_list.claimed=true and users.hid=food_list.user_id";
		$query = $this->db->query($sql);
		if($query->num_rows()==0){
			return;
		}
		$items = array();
		$i=0;
		foreach($query->result() as $row){
			$items[$i]["item_id"] = $row->food_id;
			$items[$i]["name"] = $row->food_name;
			$items[$i]["perishable"] = $row->perishable;
			$items[$i]["description"] = $row->description;
			$items[$i]["location"] = $row->location;
			$items[$i]["contact"] = $row->cell_phone;
			$items[$i]["expiration"] = $row->expiration_date;
			$items[$i]["notes"] = $row->notes;
			$items[$i]["quantity"] = $row->quantity;
			$i++;
		}
		echo json_encode($items);
	}
	
	function insert_item($food_name,$description,$quantity,$perishable,$expiration,$location_description,$notes){

		$sql = "insert into food_list(food_name,description,quantity,perishable,expiration_date,locations,notes) values (?,?,?,?,?,?,?)";
		$this->db->query($sql,array("$food_name","$description",$quantity,$perishable,"$expiration","$location_description","$notes"));	
	}
	
	function user_items(){
		$user_id = $this->session->userdata('username');	
		$sql = "select food_list.food_id,food_name,description,locations,notes,quantity,perishable,expiration_date from food_list where food_list.user_id=$user_id";
		
		
		$query = $this->db->query($sql);
		$items = array();
		$i=0;
		foreach($query->result() as $row){
			$items[$i]["item_id"] = $row->food_id;
			$items[$i]["name"] = $row->food_name;
			$items[$i]["perishable"] = $row->perishable;
			$items[$i]["description"] = $row->description;
			$items[$i]["location"] = $row->locations;
			//$items[$i]["contact"] = $row->cell_phone;
			$items[$i]["expiration"] = $row->expiration_date;
			$items[$i]["notes"] = $row->notes;
			$items[$i]["quantity"] = $row->quantity;
			$i++;
		}
		echo json_encode($items);
	}
	
}
?>