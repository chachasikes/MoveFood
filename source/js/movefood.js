moveFood = {};

/**
 * Show an individual item.
 */
moveFood.showItem = function(data) {
  var item;
  for (i in data) {
    item = data[i];
    $('div#content div#food_name').html(item.name);
    $('div#content div#food_description').html(item.description);
    $('div#content div#food_quantity').html(item.quantity);
    $('div#content div#food_perishable').html(item.perishable);
    $('div#content div#food_expiration').html(item.expiration);
    $('div#content div#food_location').html(item.location);
    $('div#content div#food_notes').html(item.notes);
    $('div#content div#food_contact').html(item.contact);
  }
};


moveFood.addItemSubmit = function() {
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
  console.log("adding Item");
  console.log(item);

  // Insert values.
  $.ajax({
    url: "http://www.movefood.krangarajan.com/movefood/index.php/createitem.php",
    dataType: 'json',
    method: "post",
    data: item,
    success: moveFood.addItem,
    error: moveFood.error,
  });

  return false;
};

moveFood.addItem = function() {
console.log("added item");
/*
  var item;
  for (i in data) {
    item = data[i];
    $('div#content div#food_name').html(item.name);
    $('div#content div#food_description').html(item.description);
    $('div#content div#food_quantity').html(item.quantity);
    $('div#content div#food_perishable').html(item.perishable);
    $('div#content div#food_expiration').html(item.expiration);
    $('div#content div#food_location').html(item.location);
    $('div#content div#food_notes').html(item.notes);
    $('div#content div#food_contact').html(item.contact);
  }
*/
};

moveFood.showList = function(results) {
    for (i in results) {
        $('#itemslist').append("<li>" + results[i].name + "</li>");
    }
}

moveFood.registerResponse = function() {
  console.log("added user");
};

moveFood.register = function() {

    var item = {};
    item.username = $('form#register-form #user_name').val();
    item.password = $('form#register-form #user_password').val();
    item.location = $('form#register-form #user_location').val();
    item.latitude = $('form#register-form #user_latitude').val();
    item.longitude = $('form#register-form #user_longitude').val();
    item.contact = $('form#register-form #user_contact').val(); // phone number
    item.description = $('form#register-form #user_description').val(); 
    console.log(item);

    // Insert values.
    $.ajax({
    	url: "http://www.movefood.krangarajan.com/movefood/index.php/register",
      dataType: 'json',
      method: "post",
      data: item,
      success: moveFood.registerResponse,
      error: moveFood.error,
    });

    return false;
};

moveFood.error = function () {
  console.log("Error");
};