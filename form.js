let collegename = document.getElementById("name");
let password = document.getElementById("plc");
let Teamname=  document.getElementById("team");
let memberinTeam=  document.getElementById("mteam");
let Teamldrname=  document.getElementById("TLname");
let cntctnumofTL=  document.getElementById("TLnum");

function validate(){
if (collegename.value == ""){
    alert("college name cannot be blank");
    return false;
}
else if(place.value == ""){
    alert("place cannot be blank");
    return false;
}  
else if(Teamname.value == ""){
    alert("Team name cannot be blank");
    return false;
}
else if(Teamname.value.length<20){
    alert("Minimum Team name length is 20 characters")
    return false;
}
else if(memberinTeam.value == ""){
    alert("This cannot be blank");
    return false;
}

else if(Teamldrname.value == ""){
    alert("Team Leader name is required");
    return false;
}

else if(cntctnumofTL.value == ""){
    alert("This cannot be blank");
    return false;
}
}