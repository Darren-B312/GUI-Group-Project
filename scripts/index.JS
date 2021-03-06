// on load
window.onload = function() {
	parseLoggedInUser();
	dispCurrentUser();
}		


// User Object Template
function User(email, pWord, fName, lName, age, phNum, accBalance, gameLibrary) {
	this.email = email;
	this.pWord = pWord;
	this.fName = fName;
	this.lName = lName;
	this.age = age;
	this.phNum = phNum;
	this.accBalance = accBalance;
	this.gameLibrary = gameLibrary;
}


// Game Object Template
function Game(id, title, price, ageReq) {
	this.id = id;
	this.title = title;
	this.price = price;
	this.ageReq = ageReq;
}


// User Object Instantiation
var users = [];
users[0] = new User("dnbutler@gmail.com", "testPassword27", "Darren", "Butler", 23, 353892382755, 100.00, [0,1,4]); // Darren
users[1] = new User("hamsoro@hotmail.com", "1234", "Connor", "Brookfield", 18, 353871234567, 0.00, [2]); // Connor
users[2] = new User("resh@compuserve.com", "5678", "Evan", "Greaney", 13, 353860987654, 54.32, [1,3]); // Evan
users[3] = new User("gagnew@gmit.ie", "java", "Gerry", "Agnew", 56, 123456789012, 10000.00, [0,1,2,3,4,5]); // Gagnew


// Game Object Instantiation
var games = [];
games[0] = new Game(0, "World of Warcraft",44.99, 13);
games[1] = new Game(1, "Overwatch", 39.99, 12);
games[2] = new Game(2, "Fornite", 0.00, 13);
games[3] = new Game(3, "Minecraft", 23.95, 5);
games[4] = new Game(4, "Fallout 4", 29.99, 18);
games[5] = new Game(5, "Spore", 14.99, 8);


// Cart Array
var cart = [];
var carSize = 0;


// Other Vars
var x;
var i;
var modalMessage;
var modalCartMessage;


// login 
function login() {
	var emailBool = false;
	var pWordBool = false;
	var e = document.getElementById("emailIn").value;
	var p = document.getElementById("passwordIn").value;
	
	for (i = 0; i < users.length; i++) {
		if(e == users[i].email) {
			emailBool = true;
			if(p == users[i].pWord) {
				pWordBool = true;
				//alert("logged in!");
				modalMessage = "Logged in!";
				x = i;
				stringLoggedInUser(users[x]);
				document.getElementById("loginFields").innerHTML = "Welcome " + users[x].fName + ", Wallet: $" + users[x].accBalance;
			}
		}// if

	}// for	
	
	if ((emailBool && pWordBool) == false)
	modalMessage = "Incorrect Email or Password";		
	//alert("Incorrect email or password!");	
}


// Stringify - Logged in User
function stringLoggedInUser(obj) {
	localStorage.loggedInUser = JSON.stringify(users[x]);
	localStorage.loggedInUserArrayPos = JSON.stringify(x);
}


// Add to Cart
function gameToCart(game) {
	cart[carSize] = games[game];
	carSize++;
	
	modalCartMessage = games[game].title + " added to cart!";
	//alert(games[game].title + " added to cart!");
}


// Stringify - cart
function stringCart() {
	localStorage.cart = JSON.stringify(cart);
}


// Parsing
function parseLoggedInUser() {
	currentUser = JSON.parse(localStorage.loggedInUser);
	currentUserArrayPos = JSON.parse(localStorage.loggedInUser);
}

function dispCurrentUser() {
	document.getElementById("loginFields").innerHTML = "Welcome " + currentUser.fName + ", Wallet: $" + currentUser.accBalance;
}


//=== The Almighty Modal Box ===//
var modal = document.getElementById('myModal');
var btn = document.getElementById("loginButton");
var cartBtn0 = document.getElementById("cartButton0");
var cartBtn1 = document.getElementById("cartButton1");
var cartBtn2 = document.getElementById("cartButton2");
var cartBtn3 = document.getElementById("cartButton3");
var cartBtn4 = document.getElementById("cartButton4");
var cartBtn5 = document.getElementById("cartButton5");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
	login();
    modal.style.display = "block";
	document.getElementById("modalMessagePara").innerHTML = modalMessage;
}
cartBtn0.onclick = function() {
	gameToCart(0);
    modal.style.display = "block";
	document.getElementById("modalMessagePara").innerHTML = modalCartMessage;
}
cartBtn1.onclick = function() {
	gameToCart(1);
    modal.style.display = "block";
	document.getElementById("modalMessagePara").innerHTML = modalCartMessage;
}
cartBtn2.onclick = function() {
	gameToCart(2);
    modal.style.display = "block";
	document.getElementById("modalMessagePara").innerHTML = modalCartMessage;
}
cartBtn3.onclick = function() {
	gameToCart(3);
    modal.style.display = "block";
	document.getElementById("modalMessagePara").innerHTML = modalCartMessage;
}
cartBtn4.onclick = function() {
	gameToCart(4);
    modal.style.display = "block";
	document.getElementById("modalMessagePara").innerHTML = modalCartMessage;
}
cartBtn5.onclick = function() {
	gameToCart(5);
    modal.style.display = "block";
	document.getElementById("modalMessagePara").innerHTML = modalCartMessage;
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}