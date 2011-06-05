$(document).ready(function(){
    $('form#login-form .form-submit').click(function(){
        var user = {};
        user.name = $('form#login-form #user_name').val();
        user.password = $('form#login-form #user_password').val();

        moveFood.login(user);
    return false;
  });

    $.ajax({
        url: "http://www.movefood.krangarajan.com/movefood/index.php/list_claims",
        data: "",
        method: "post",
        success: function(results) {moveFood.showList(results);},
        error: function(result) { moveFood.error() },
        dataType: "json"});
});