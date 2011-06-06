We are working on MoveFood

Description here:

https://docs.google.com/a/codeforamerica.org/document/d/1wO0oTQdSs0vdKbYqntNT3UqcctCwWuVPyWSyiuAmLbs/edit?hl=en_US&authkey=CMWi0qcK


demo site: http://www.movefood.krangarajan.com/




### Still to do - sat 11"15 pm

* claim button needs to work (RC)

* Text this button (CHACH) (in progress, json issue)
* location fields (CHACH)
* add item needs to work (RC)

* check food list loads data (CHACH)
* add data (chach) inserts data (CHACH)

* food list table shows rows with all the correct data
* items i have (RC)
* list needs to load (RC)
* login not transparent (RC)


* map?

* show item load data 
* load one data item
* edit item?

### Current Pages
* index.html (is the users page, with a login)
* food-list.html - list of food pages
* register.html (works) add a user
* show-item.html - show an individual food item
* add-item.html add a food item


DOC

Move Food


At RHOK (Seattle) there is a team of 5-8 people working on Move Food

What are are doing

Imagine a disruption in the supply chain of food. This goes on for a month. How do you keep people fed.

We are creating a means of coordinating volunteers to deliver food drawing on groundwork of everyday operations to coordinate emergency response.

Related Problem Definitions

http://www.rhok.org/problems/moving-food-0

Our Goal

We are making a working prototype by the end of the weekend. There should be suitable information stored that later work can focus on the analytics of what’s going on

Real Life Use Case


Technology

Html version - web app - simple - webservice


People

In Seattle
Kip Silverman 
Chach Sikes : chachasikes@gmail.com @chachasikes  github:chachasikes
Ben Houston
Noah Hofmann-Smith
Arunabh Verma
Greg Touchton

RC Johnson (github) rcjohnson
Keith Tom (Silicon Valley)

Othmane Rahmouni @othmaner  
Karthik Ranarajan@krangarajan github: karthikrangarajan

“ABOUT” PAGES
MULTI-PAGE LAYOUT

THREE (3) “ABOUT” PAGES:
GENERAL “ABOUT” PAGE
“DONATING FOOD” INFO PAGE
“VOLUNTEERING TO MOVE FOOD” INFO PAGE

-----
GENERAL “ABOUT” PAGE

Provide two (2) links:
“Donating food” info page
“Volunteering to move food” info page

----

About MoveFood

MoveFood is a tool for businesses to and volunteers to connect and get leftover food to people in need on an ad-hoc basis.

How does it work?

A business will post the food they have available and when it will be available for pickup. A volunteer can search the site or be notified automatically when some food becomes available within their designated range. The volunteer then “claims” the food on the site and picks it up from the business. The volunteer then delivers to food to a registered recipient or persons in need.

How do I get involved?

Sign up! Register your business as a source of food, sign up as a volunteer or as a destination/recipient. Depending where you live, there may be different requirements and restrictions to participating. If there isn’t a Move Food set up yet in your area, please contact us to find out how to go about getting a local version up and running for your area.

Community

For individuals that opt-in, it will eventually be possible to communicate and coordinate with others in your area. this will allow businesses and volunteers to pre-plan to make the efforts more efficient. For example, if a particular business usually has food available three nights a week, three volunteers would be able to coordinate between each other and pick a designated night and ask someone to cover is something comes up. While the system is designed to work on a ad-hoc basis, it’s strength really shines on forming repeatable patterns and forging relationships between the resources, volunteers and recipients.

-----
[“DONATING FOOD” INFO PAGE]
-----
As a food provider, what is expected of me?
Offer food donations that are appropriate--safe, tasty and desirable
Fill in information about the food item completely and accurately.
Give consideration the expiration time you use when listing an item for donation. Make sure the food item, if perishable, will still be fresh up to the expiration time, considering the manner of its storage.
After posting the item, make sure you are available to turn it over to a volunteer, until the expiration time you have specified.
Have food donations prepared in a manner suitable for transport.
Closed box
Well-secured
Be reachable for contact - so that volunteers can confirm pick-up time and details.


-----
[“VOLUNTEERING TO MOVE FOOD” INFO PAGE]
-----
As a volunteer, what is expected of me?

We expect our volunteers to operate with the utmost of integrity. Please make sure that if you volunteer to pick up and deliver food, you abide by the following requirements:
Pick up within the posted time frame, and deliver to the appropriate destinations or persons in need.
Make sure you have a reliable plan to distribute the food. Claim only items you are sure you can distribute.
Distribute food donations only to legitimate recipients, as put forth in the “Legitimate Recipients” guidelines.
Do not accept payment for donated items.
Drive and act safely at all times.
Follow local health codes and food handling laws. We require a food safety card or equivalent if available to volunteer for move food. This helps ensure that volunteers are properly trained in handling food, abiding by local laws and regulations and help ensuring the safety of the recipients. If there are no such laws/certification in your area, we recommend reviewing xxxxxx.
After you “claim” food for a pickup, make sure to fully review the information and directions/instructions of the business that is offering the food. If you cannot make it for some reason, please notify the business as soon as possible, so the food can be re-listed and hopefully picked up by someone else.
Once picked up, either you or the business can mark the items as being picked up. if you do not have a mobile device to do so, please ask the business to change the status.
When you drop the food off, if it is a known location and they have the ability, ask them to verify the food was dropped off. If they do not, or you are delivering food to individuals, please note where and when you dropped the food off, and record it on the web site. This helps us track the delivery, monitor trends and efficiencies, and improve the overall system. It is important that each step of the process be recorded, so please make sure the “chain of custody” is documented.
Fill in all the information asked for in the item claim form. (TBD) This information is necessary to ensure the food donations are going where they are needed.


What does it cost?

There is a nominal registration fee involved to help with overhead and costs. Beyond that, it only costs your time and good intentions. No money ever changes hands. Ever.

How is my information used?/can anyone else see my personal information?

Your information is stored securely and is not shared with any other entity.

By default, all your personal information is wholly private, save for your name and contact number/information which is only displayed to the businesses that you “claim” a pickup from. This is so that they can attempt to contact you between the time you claim a pickup and your arrival.

If you so desire, you will be able to communicate, collaborate and create community with others that have also opted in. We will be rolling these community features out in the near future.

[END OF INFO PAGES CONTENT]


Possible workflows to support


Registration
Find an item
Post an item
Move an item
Disaster mode

Resources needed:

Web server
DB
php(?)

Pages:

Registration
Login
Main page
Post an item
Manage items
User pages


Schema


Admin?
	DisasterModeActive

User
    ID
    Name
    Contact (Email/etc)
    Password Hash
    IsDispatcher
    IsResource
    IsDispatchPoint
    Available
	location

Item
    ID
    Name
    Description
    Perishable/TTL
    Available
	location

ChainOfCustody  (what has happened where & when, moving from point A to point B “transaction log”)
    ID
	action
    OldUser
    NewUser
   item
    Time


Balsamiq Mockups


Our Github Repository

https://github.com/chachasikes/MoveFood

git://github.com/chachasikes/MoveFood.git

Chat

This is from Eva (Silicon Valley): “IS there a way where we all can share codes?”
(RC  - Seattle:) Yes, assuming you mean software, we were thinking of using a Git project.
(Keith) - yeah we have a repository created on Github.  But I’m unsure how much we can share on the back end.  I was thinking if we work on a common API doc, that might help us stay compatible without having to worry about each other’s code.  It is a bit hard to decide since we have so little time.  Here is the doc: https://docs.google.com/document/d/1EENWGEVDM3xLEEF1zLXG_SZZphxhE8MnYspsrLNdkvE/edit?hl=en_US (We need permission to see this doc. Requesting shortly - FIXED!)

Our github & wiki:
https://github.com/keithtom/Food-Mover/wiki

Sample process

1. Jill’s Restaurant makes an item available.
2. Joe Volunteer browses available items and their locations
3. Joe finds the item at Jill’s Restaurant, and “Claims” it
4. Joe calls Jill’s Restaurant, and makes arrangments to pick up the item in 30 minutes
5. Joe goes to Jill’s Restaurant, and asks for the manager. The manager meets him, and gives him the item.
6. Joe recieves the item, and goes off to make use of it
7. A record of the transaction is generated.
8. Joe and the manager at Jill’s each add information to the record, adding details about the experience.
9. Reputational ratings are included, and reflected in user profiles later


Description of actors, items, and service

Provider: a donator of surplus food.
Attributes:
One or more authorized representatives.
One or more locations.
Public contact information.

Examples:
restaurant
catering service
banquet hall
wedding planner
large office that regularly gets food delivered

Possible variations
Providers not afiliated with a business, who still want to donate food, ad hoc. They might only have a mobile, not a land-based contact. Then contact information should be restricted, to only be seen by the confirmed volunteer match.


Registration Information:


Volunteer: person who picks up food
Attributes:
may-or-may-not have mobile connectivity
has a vehicle to pick up and transport food (car, truck, cargo bike, legs & feet, etc)
might use the food personally?
required to register? required to authenticate?

Examples:
friend or acquaintance of hungry people
hungry person?
concerned citizen
representative of aid organization


Food Donation: a quantity of some kind of food that is donated.
Attributes:
safe, tasty, desirable
may be perishable
only available for a defined window of time
Available from a certain provider, in a certain location
One representative from the provider is responsible to:
interact with volunteers responding to the donation
give the donation to the matched volunteer, when they arrive

Examples
Leftovers from a banquet, lunch or other group event
Unsold fresh-baked goods
Canned/dry goods
Hot food at closing time


Edge cases, alternative scenarios:
preferential relationships between providers and volunteers
regularly occurring food surpluses
regularly scheduled volunteer pick-ups
Require more verification, or special qualifications for certain pickups (high value, or special type)
allow the provider to reserve the right to approve the pickup before a match is confirmed
“vested” or preferred volunteers might get certain notifications a few minutes before the volunteer community at large, so that they get the chance to respond first.


Ways to extend the service:
Support non-food items:
clothing
medicine
random other goods
Strengthen crisis-response, by adding “Dispatchers”
Include support for a third role--an independent “runner”, who transports the donation from the provider to the matched volunteer
Mobile notifications
Stored persistent search criteria


API:

Login: 
http://movefood.krangarajan.com/movefood/index.php/login

var data = {“username”:”username”,
	        “password”:”password”
	    	};	
$.post{
	url: http://movefood.krangarajan.com/movefood/index.php/login,
	data: data,
	success: ..,
	datatype: json
};

Response: {“valid”:”true/false”}

Logout:
http://movefood.krangarajan.com/movefood/index.php/login/logout

--

Claim:
http://movefood.krangarajan.com/movefood/index.php/claim


var data = {“item_id”:”item_id”,
	            	};	
$.post{
	url: http://movefood.krangarajan.com/movefood/index.php/claim
data: data,
	success: ..,
	datatype: json
};

PickUp:
http://movefood.krangarajan.com/movefood/index.php/pickup

var data = {“item_id”:”item_id”,
	            	};	

$.post{
	url: http://movefood.krangarajan.com/movefood/index.php/pickup,
data: data,
	success: ..,
	datatype: json
};

Release:

http://movefood.krangarajan.com/movefood/index.php/release

var data = {“item_id”:”item_id”,
	            	};	

$.post{
	url: http://movefood.krangarajan.com/movefood/index.php/release,
data: data,
	success: ..,
	datatype: json
};

List:

http://movefood.krangarajan.com/movefood/index.php/list_items

$.post{
	url: http://movefood.krangarajan.com/movefood/index.php/list_items,
data: data,
	success: ..,
	datatype: json
};
Optional Parameter: id=<number>
Response: 
[{"item_id":"1","food_name":"Rice","perishable":"0","expiration_date":"2012-12-12 00:00:00"},
{"item_id":"2","food_name":"Milk","perishable":"1","expiration_date":"2011-06-10 00:00:00"}]

Register:

http://movefood.krangarajan.com/movefood/index.php/register

var data = {“username”:”username”,
	       “password”:”password”,
                   “latitude”:”latitude”,
                   “longitude”:”longitude”,
	       “description”:”description”
	            	};	

$.post{
	url: http://movefood.krangarajan.com/movefood/index.php/register,
data: data,
	success: ..,
	datatype: json
};

List Claimed Items:
http://movefood.krangarajan.com/movefood/index.php/list_claims


$.post{
	url: http://movefood.krangarajan.com/movefood/index.php/list_claims,
data: data,
	success: ..,
	datatype: json
};

Insert Items:
http://movefood.krangarajan.com/movefood/index.php/createitem

Check if User is logged in:
http://www.movefood.krangarajan.com/movefood/index.php/login/logged_in

JSON: {“valid”:”true/false”}

Get User details:
http://www.movefood.krangarajan.com/movefood/index.php/login/get_user_data

Response: {"username":"test","latitude":"0","longitude":"0","contact":"","description":"","location_description":""}

Get User Food List
$.post{
	url: http://movefood.krangarajan.com/movefood/index.php/my_items,
data: data,
	success: ..,
	datatype: json
};
Optional Parameter: id=<number>
Response: 
[{"item_id":"1","food_name":"Rice","perishable":"0","expiration_date":"2012-12-12 00:00:00"},
{"item_id":"2","food_name":"Milk","perishable":"1","expiration_date":"2011-06-10 00:00:00"}]

