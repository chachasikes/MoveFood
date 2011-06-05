$(document).ready(function(){

  $('form#register-form .form-submit').click(function(){
    var item = {};
    item.name = $('form#register-form #user_name').val();
    item.password = $('form#register-form #user_password').val();
    item.location = $('form#register-form #user_location').val();
    item.contact = $('form#register-form #user_contact').val();    
    return false;
  });

});
