function money(){
	text = localStorage.getItem("TotalAmount");
	obj = JSON.parse(text);
	document.getElementById("totalbal").value = obj;
}
function alertbtn() {
	alertboard.style.display = "block";
	ccboard.style.display = 'none';
	alertboard.innerHTML ="<br>" +"<li>" + "Welcome to GOMOBLIE home of superb technology" + "</li>" + "<hr>" + "<br>";
	alertboard.innerHTML +="<br>" +"<li>" + "You can always add more cash to your portal using CRYPTOCURRENCIES, BANK TRANSFER and many more." + "</li>" + "<hr>" + "<br>";
	alertboard.innerHTML +="<li>" + "You can also get Support from our Support team using the ACE button." + "</li>" + "<hr>";
}
function changeview() {
	alertboard.style.display = "none";
}
function changevieww() {
	ccboard.style.display = 'none';
	alertbox.style.display = 'none';
}
function transactionbtn() {
	transactionboard.style.display = "block";
	voucherboard.style.display = "none";

	text = localStorage.getItem("gomobile");
	obj = JSON.parse(text);
	
	for (let i = 0; i < obj.length; i++) {
    document.getElementById("transactionboard").innerHTML += "<li>" + obj[i].Provider+ "-----------" + obj[i].Amount + "</li>" +"<br>";
	}
	
}
function generatorbtn() {
	voucherboard.style.display = "block";
	transactionboard.style.display = "none";
	voucherboard.innerHTML = null;
	var a = totalbal.value;
	var b = amount.value;
	if (a >= 0) {
		var c = a - b;
		totalbal.value = c;
		localStorage.TotalAmount = JSON.stringify(c);
	}else{
		if (a == 0) {}
		localStorage.TotalAmount = JSON.stringify(0);
	}
	if (a == 0) {
		totalbal.value = 0;
		alert("INSUFFICENT BALANCE")
		voucherboard.innerHTML = null;

	}else{
	if (provider.value == "AIRTEL") {
	 var d = '19' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 var e = '31' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 var f = '07' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 var g = '09' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 var AIRTEL = d + e + f;
	 voucherboard.innerHTML += d + "-" + e + "-" + f+ 5 + "-" + g + 3;
	 voucherboard.innerHTML += "<br>";
	}else{
		if (provider.value == "GLO") {
			var d = '71' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var e = '31' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var f = '07' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var g = '22' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
			 var GLO = d + e + f;
	 		voucherboard.innerHTML += d + "-" + e + "-" + f + "-" +g;
	 		voucherboard.innerHTML += "<br>";
		}else{
		if (provider.value == "GODATA") {
			var d = '72' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var e = '31' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var f = '0' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
			 var GLO = d + e + f;
	 		voucherboard.innerHTML += d + "-" + e + "-" + f;
	 		voucherboard.innerHTML += "<br>";
		}else{
		if (provider.value == "MTN") {
			var d = '00' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var e = '31' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var f = '07' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
			 var GLO = d + e + f;
	 		voucherboard.innerHTML += d + "-" + e + "-" + f;
	 		voucherboard.innerHTML += "<br>";
		}else{
		if (provider.value == "9MOBILE") {
			var d = '90' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var e = '31' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
	 		var f = '07' + Math.floor(Math.random()*5) + Math.floor(Math.random()*10);
			 var GLO = d + e + f;
	 		voucherboard.innerHTML += d + "-" + e + 5 + "-" + f + 3;
	 		voucherboard.innerHTML += "<br>";
	 	}
		}
		}
	
}
}
}
var allproduct = [];
let getCus =JSON.parse(localStorage.getItem('gomobile'));
	getCus !==null ? allproduct=getCus : allproduct =[];
	
		history = {};
			history.Provider = provider.value;
			history.Amount = amount.value;
						allproduct.push(history);
						localStorage.gomobile = JSON.stringify(allproduct);
		}
function ccbtn(){
	ccboard.style.display = 'block';	
	alertboard.style.display = "none";
}
function send(){
	ccboardscreen.innerHTML += message.value + "  &larr;" + '<hr>' + "<br>";
	message.value = null;
}
function addcashbtn() {
	alert("UNDER CONSTRUCTION")
}