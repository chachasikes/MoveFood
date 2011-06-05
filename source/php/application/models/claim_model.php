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
		$sql = "insert into claimed_list (food_id,username,claimed,picked_up,released) values ($item_id,\"$username\",false,false,true)";
		$this->db->query($sql);
	}
	
	public function pickup($item_id,$username){
		$sql = "insert into claimed_list (food_id,username,claimed,picked_up,released) values ($item_id,\"$username\",false,true,false)";
		$this->db->query($sql);
	}
	
	public function list_items(){
		$sql = "select * from food_list";
		$query = $this->db->query($sql);
		$items = array();
		$i=0;
		foreach($query->result() as $row){
			$items[$i]["item_id"] = $row->food_id;
			$items[$i]["food_name"] = $row->food_name;
			$items[$i]["perishable"] = $row->perishable;
			$items[$i]["expiration_date"] = $row->expiration_date;
			$i++;
		}
		echo json_encode($items);
	}
}
?>