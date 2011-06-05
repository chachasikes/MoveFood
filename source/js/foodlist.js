$(document).ready(function(){

  // Load available food items.
  
  // Do get request.
  
  // Read through list of items, and create table elements.

    var item = {};
    item.foodItemID = "food ID";
    item.userID = "user ID";
    item.name = "name";
    item.description = "description";
    item.quantity = "quantity";
    item.perishable = "perishable";
    item.expiration = "expiration";
    item.location = "location";
    item.notes = "notes";
    item.contact = "contact";

/*
            
    $('div#content div#food_name').html(item.name);
    $('div#content div#food_description').html(item.description);
    $('div#content div#food_quantity').html(item.quantity);
    $('div#content div#food_perishable').html(item.perishable);
    $('div#content div#food_expiration').html(item.expiration);
    $('div#content div#food_location').html(item.location);
    $('div#content div#food_notes').html(item.notes);
    $('div#content div#food_contact').html(item.contact);
*/

    
    

/*
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

    function showList(results) {
    
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
                    + "</tr>";
            $('#food-list').append(row);
        }
    }

    $.ajax({
        url: "http://www.movefood.krangarajan.com/movefood/index.php/list_items",
        data: "",
        method: "post",
        success: function(results) {showList(results);},
        error: function(result) { alert("failed") },
        dataType: "json"});

});
