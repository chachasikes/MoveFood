$(document).ready(function(){

  $('form#add-item-block-form .form-submit').click(function(){
    var item = {};
    item.name = $('form#add-item-block-form #food_name').val();
    item.description = $('form#add-item-block-form #food_description').val();
    item.quantity = $('form#add-item-block-form #food_quantity').val();
    item.units = $('form#add-item-block-form #food_units').val();
    item.perishable = $('form#add-item-block-form #food_perishable:checked').val();
    item.expiration = $('form#add-item-block-form #food_expiration').val();
    item.location_description = $('form#add-item-block-form #food_location_description:checked').val();
    item.default_location = $('form#add-item-block-form #food_default_location').val();
    item.notes = $('form#add-item-block-form #food_notes').val();
    item.contact_detail = $('form#add-item-block-form #food_contact_detail').val();
    item.default_contact = $('form#add-item-block-form #food_default_contact:checked').val();
    
    console.log(item);
    
    return false;
  });

});
