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


moveFood.loadItemDetails = function(data) {
  var item;
  var output;
  for (i in data) {
    item = data[i];
/*     output += */
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
    error: moveFood.error
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
      error: moveFood.error
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
};

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
};

moveFood.getLoggedInUser = function(callback) {
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

moveFood.loadTwitterList = function() {
  $.ajax({
    url: "http://www.movefood.krangarajan.com/movefood/index.php/list_items",
    data: "",
    method: "post",
    success: function(results) {moveFood.createTwitterRow(results);},
    error: function(result) { alert("failed") },
    dataType: "json"
  });
};

moveFood.tweetMessage = function(result) {
moveFood.constructTweet(result);
  var maxLength = 140 - (result.tweet.length + 1);
  console.log(maxLength);
  if (result.tweet.length > maxLength) {
    result.tweet = result.tweet.substr(0, (maxLength - 3)) + '...';
  }

  result.tweetThisLink = 'http://twitter.com/share?url=' + encodeURIComponent(result.tweetLink) + '&text=' + encodeURIComponent(result.tweet);

  console.log(result);
  result.tweetStatus = '<a href="' + result.tweetThisLink +'" target="_blank"'+'>Tweet</a>'
  return result.tweetStatus;
}


moveFood.constructTweet = function(result) {
  var tweet = "";
  result.tweetLink = "http://localhostblah.com/showItem?id=" + result.item_id;
  if(result.name !== undefined) {
    tweet += result.name;
  }
  if (result.quantity !== undefined) {
    tweet += "[unit: " + result.quantity;
  }
  else{
      tweet += "[unit: 1";
  }
  if (result.units !== undefined) {
    tweet += " " + result.units + "]";
  }  
  else{
      tweet += " unit]";
  }
  if (result.expiration !== undefined) {
      result.expirationShort = result.expiration.substr(0, (result.expiration.length - 9));
    tweet += "[expires: " + result.expirationShort + "]";
  }
  else{
  }
  if((result.latitude !== undefined) && (result.longitude !== undefined)) {
    tweet += " at (";
    tweet += result.latitude;
    tweet += ",";
    tweet += result.longitude;
    tweet += ")";
  }
  else if (result.location !== undefined){
    tweet +=  '[loc' + result.location.substr(0, 8) +']';
  }

  console.log(result);
 result.tweet = tweet;
};


moveFood.showFoodList = function() {
    $.ajax({
      url: "http://www.movefood.krangarajan.com/movefood/index.php/list_items",
      data: "",
      method: "post",
      success: function(results) {moveFood.showList(results);},
      error: function(result) { alert("failed") },
      dataType: "json"
    });
};
  
moveFood.showList = function(results) {
    
  for (i in results) {
    console.log(results);
      if(results[i].perishable === 0) {
      results[i].perishable_text = "Yes";
      }
      else {
      results[i].perishable_text = "No";
      }

      var toolTip = "";

  
      var row = "<tr class='fooditem-id-" + results[i].item_id + "'>"
              + "<td class='food-name'>" + results[i].name + "</td>"
              + "<td class='location'>" + results[i].location + "</td>"
              + "<td class='perisable'>" + results[i].perishable_text + "</td>"
              + "<td class='expiration'>" + results[i].expiration + "</td>"
              + "<td><div class='claim button'><a href='#'>Claim this item</a></div></td>"
              + "<td><div class='tweet button'>" +  moveFood.tweetMessage(results[i]) + "</div></td>"
              + "</tr>";
      $('#food-list').append(row);
    }

};
