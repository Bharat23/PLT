//Initialize the Count or Time in sec equals to zero
var count = 0;

//Assign SetInterval to a variable
PageTime = setInterval(function() {
    //Increament Count on Each Interval Call i.e. Each Second
    count += 1;
    //If Time is Greater than 20 sec Load the Timeout Page : Change time as per need
    if (count === 20) {
	//code to clear the interval
        clearInterval(pageTime);
	//Insert the HTML here which will be painted after timeout is encountered
        document.write("Code FOr Page To Be Displayed Here");
    }
}, 1000);

//This determines the state of the entire document
document.onreadystatechange = function() {
    //Here we selected Interactive event to encounter the Timeout 
    //Load Time or DOM content loaded time can also be used
    if (document.readyState === 'interactive') {
        clearInterval(pageTime);
    }
}

//Function to reload the page can be call using the HTML inserted by document.write
//Can be call on an onclick event of a buttom
function reloadPage() {
    location.reload();
}
