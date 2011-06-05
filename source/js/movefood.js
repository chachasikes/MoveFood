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
/*   var item = {}; */
/*
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
  
*/
  
  var data = {
  "name": $('form#add-item-block-form #food_name').val(),
  "description": $('form#add-item-block-form #food_description').val(),
  "quantity": $('form#add-item-block-form #food_quantity').val(),
  "units": $('form#add-item-block-form #food_units').val(),
  "perishable": $('form#add-item-block-form #food_perishable:checked').val(),
  "expiration": $('form#add-item-block-form #food_expiration').val(),
  "location_description": $('form#add-item-block-form #food_location_description:checked').val(),
  "default_location": $('form#add-item-block-form #food_default_location').val(),
  "notes": $('form#add-item-block-form #food_notes').val(),
  "contact_detail": $('form#add-item-block-form #food_contact_detail').val(),
  "default_contact": $('form#add-item-block-form #food_default_contact:checked').val()
  }
  
  
  
  console.log("adding Item");
  console.log(data);

  // Insert values.
  $.ajax({
    url: "http://www.movefood.krangarajan.com/movefood/index.php/createitem",
    type: "POST",
    dataType: 'json',
    data: data,
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
    
    var dataItem = {
      "username":item.username,
      "password":item.password,
      "location":item.location,
      "latitude":item.latitude,
      "longitude":item.longitude,
      "contact":item.contact,
      "description":item.description
    }
    console.log(item);

    // Insert values.
    $.ajax({
    	url: "http://www.movefood.krangarajan.com/movefood/index.php/register",
      type: "POST",
      dataType: 'json',
      data: dataItem,
      success: moveFood.registerResponse,
      error: moveFood.error,
    });

    return false;
};

moveFood.hideLogin = function() {
    $('#login').hide();
    return false;
}

moveFood.showLogin = function() {
    $('#login').show();

    return false;
}

moveFood.login = function() {
    var userData = {
        "username":$('form#login-form #user_name').val(),
        "password":$('form#login-form #user_password').val()
    };
    console.log(userData);
    $.ajax({
        url: "http://www.movefood.krangarajan.com/movefood/index.php/login",
        dataType: 'json',
        type: "POST",
        data: userData,
        success: moveFood.validateLogin,
        error: moveFood.error
    });
    return false;
}

moveFood.validateLogin = function(response) {
    console.log(response);
    if (response.valid == "true") {
        moveFood.loadData();
        moveFood.hideLogin();
        return false;
    }
    else {
        moveFood.failedLogin();
    }
}

moveFood.failedLogin = function() {
    $('#login').show();
    $('#failedlogin').show();
    return false;
}

function getLoggedInUser(callback) {
    $.ajax({
        url: "http://www.movefood.krangarajan.com/movefood/index.php/login/logged_in",
        async: false,
        data: "",
        success: function(results) {
            callback(results);
        },
        error: function(result) {
            moveFood.error()
        },
        dataType: "json"});
}
moveFood.loadData = function() {
    var user = getLoggedInUser(moveFood.showUser);
}

moveFood.isLoggedIn = function(user) {
    return user != undefined && user.user != "false";
}

moveFood.showUser = function(user) {
    console.log(user);
    if (moveFood.isLoggedIn(user)) {
        $.ajax({
            url: "http://www.movefood.krangarajan.com/movefood/index.php/login/get_user_data",
            data: "",
            success: function(results) {moveFood.updateUserBlock(results);},
            error: function(result) { moveFood.error() },
            dataType: "json"});
        $.ajax({
            url: "http://www.movefood.krangarajan.com/movefood/index.php/list_items",
            data: "",
            success: function(results) {moveFood.renderItems(results);},
            error: function(result) { moveFood.error() },
            dataType: "json"});
        $.ajax({
            url: "http://www.movefood.krangarajan.com/movefood/index.php/list_claims",
            data: "",
            success: function(results) {moveFood.renderClaims(results);},
            error: function(result) { moveFood.error() },
            dataType: "json"});
    } else {
        moveFood.logout();
    }
}

moveFood.logout = function() {
    $.ajax({
            url: "http://www.movefood.krangarajan.com/movefood/index.php/login/logout",
            data: "",
            dataType: "json"});
    moveFood.updateUserBlock();
}

moveFood.updateUserBlock = function(user) {
    if (user != undefined) {
        $('#username').text(user.username);
        $('#welcomeuser').html("<a href='javascript:return false;' class='login'>Welcome " + user.username + "</a> ");
        $('#userlocation').text(user.location_description + ": " + user.latitude + ", " + user.longitude);
        $('#userbio').text(user.description);
        $('#userdetails').show();
        $('#loginlink').hide();
        $('#lists').show();
        $('#logoutlink').show();
        $('#welcomeuser').show();
        $('#createaccount').hide();
    } else {
        $('#userdetails').hide();
        $('#loginlink').show();
        $('#logoutlink').hide();
        $('#welcomeuser').hide();
        $('#createaccount').show();
        $('#lists').hide();
    }
}

moveFood.renderItems = function(results) {
    for (i in results) {
        $('#itemslist').append("<li>" + results[i].name + "</li>");
    }
    $('#items').show();
}

moveFood.renderClaims = function(results) {
    for (i in results) {
        $('#claimslist').append("<li>" + results[i].name + "</li>");
    }
    $('#claims').show();
}

moveFood.error = function () {
  console.log("Error");
};

moveFood.requireAuthentication = function() {
    user = getLoggedInUser(function (results) {return results;});
    if (moveFood.isLoggedIn(user)) {
        return true;
    } else  {
        moveFood.showLogin();
        return false;
    }
}