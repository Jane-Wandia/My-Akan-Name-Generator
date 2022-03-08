function submitFore(event);{
    event .preventDefault();
    var dat =documents.form[
        "akanForm"
    ]["*birthday"].valeu;
    var gender =documents.forms[
        "akanForm"    
    ]["gender"].value;
    var akanName =""
};
var femaleNames =[
  "Akosua",
  "Adwoa",
  "Abenaa",
  "Akua",
  "Yaa",
  "Afua",
  "Ama",
    ];
var maleNames =[
    "Kwasi",
    "Kudwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",    
];
var dateObject =new Date(date);
var day =dateObject.getDay();

if (day !=null && gender != null){
    if (gender === "male"){
        akanName = maleNames[day];
    }
    

else{
    akanName = femaleNames[day];
}
}

document.getElementById(
    "akanNames").innerHTML= akanName;

    ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )

   // CC - is the century digits. For example 1989 has CC = 19

  //  YY - is the Year digits (1989 has YY = 89)
   
  //  MM -  is the Month
   
  //  DD - is the Day of the month 
   
  //  mod - is the modulus function ( % )

var submit=document.getElementById("submit");

submit.addEventListener("click", ()=>{
    var userMonth=document.getElementById("enterMonth").value;
    var userDay=document.getElementById("enterDay").value
    var userName=document.getElementById("enterName").value;

    var yeaBirth=userDay/userMonth/userName;

    console.log(yearBirth);



    var userName=document.getElementById("userOutput");
    userOutput.innertext="Your name is" + " " + userName;