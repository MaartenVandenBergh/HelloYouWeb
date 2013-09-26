function displayGreatings(){
    var name = document.getElementById("name").value;
    document.getElementById("name").value = "";
    
    var outputMessage="";
    if(name === ""){
        outputMessage = "FOLLOW THE DAMN INSTRUCTIONS!";
    }
    else{
        outputMessage = "Hello " + name + "! Have a nice day";
    }
    var newTextNode = document.createTextNode(outputMessage);       
    
    var greeting = document.getElementById("greeting");
    greeting.removeChild(greeting.firstChild);
    greeting.appendChild(newTextNode);
    
    return false;
}