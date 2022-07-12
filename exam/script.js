let c1=0;
let c2=0;
let c3=0;
let c4=0;

function userNameValidation() {
	var user = document.getElementById('uname').value;
	document.getElementById('uname').value=user.toUpperCase();
	var pattern1 = /^f[\w]{4,9}$/i;

	if(pattern1.test(user)){
		c1=0;
		document.getElementById('uname').style.backgroundColor="white";
	}
	else{
		document.getElementById('uname').style.backgroundColor="red";
		c1++;
	}
}

function mailValidation() {
	var mail = document.getElementById('mailid').value;
	var pattern1 = /^[a-z0-9]*@[a-z]{2,7}(\.)(com|edu|in|net)$/i;

	if(pattern1.test(mail)){
		c2=0;
		document.getElementById('mailid').style.backgroundColor="white";
	}
	else{
		document.getElementById('mailid').style.backgroundColor="red";
		c2++;
	}
}

function phoneValidation() {
	
	var phone = document.getElementById('phonenum').value;

	var pattern1 = /(^(977)[0-9]{7}$|^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/;
	if(pattern1.test(phone)){
		c3=0;
		document.getElementById('phonenum').style.backgroundColor="white";
	}
	else{
		document.getElementById('phonenum').style.backgroundColor="red";
		c3++;
	}
}
function countryValidation() {
	var selectCountry = document.getElementById("country").value;
	if(selectCountry=="India"){
		 document.getElementById("beerdivision").style.display="none"
	}
	else{
		document.getElementById("beerdivision").style.display="block"
	}
}


function paymentValidation(){
	var pay=document.getElementById("pay-number").value;
	var pattern1 = /(^(SBIN)[0-9]{7}$)|(^[0-9]{11}$)/;
	if(pattern1.test(pay)){
		c4=0;
		document.getElementById('pay-number').style.backgroundColor="white";
	}
	else{
		document.getElementById('pay-number').style.backgroundColor="red";
		c4++;
	}
}


let dayc=document.getElementById("NoOfdays").value;
dayc.addEventListener('keyup',Daycount);

function Daycount(){
	if(document.getElementById('inuzvid').checked || document.getElementById('ikadapa').checked)
	{
		document.getElementById("tcost").innerText="Total Cost is "+(document.getElementById("NoOfdays").value*2000);
	}
	else if(document.getElementById('iongole').checked || document.getElementById('isklm').checked)
	{
		document.getElementById("tcost").innerText="Total Cost is "+(document.getElementById("NoOfdays").value*3000);
	}
}

function changeColor(){
	document.getElementById("heading").style.backgroundColor="green";
	document.getElementById("heading").style.color="yellow";
	document.getElementById("ul").style.color="yellow";

}
function changeToNormal(){
	document.getElementById("heading").style.backgroundColor="skyblue";
	document.getElementById("heading").style.color="red";
	document.getElementById("ul").style.color="white";
}


function validate(){
	if(c1==0 && c2==0 && c3==0 && c4==0)
		return true;
	else
		return false;
}

