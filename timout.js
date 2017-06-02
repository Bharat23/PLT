var TimeoutJS = function(HTML,counter,id){
    //Initialize the Count or Time in sec equals to zero
    this.count = 0;
    this.countLimit = counter;
    var that = this;
//Assign SetInterval to a variable
    this.pageTime = setInterval(function() {
        //Increament Count on Each Interval Call i.e. Each Second
        that.count += 1;
        //If Time is Greater than 20 sec Load the Timeout Page : Change time as per need
        if (that.count >= that.countLimit) {
        //code to clear the interval
            clearInterval(that.pageTime);
        //Insert the HTML here which will be painted after timeout is encountered
            document.write(HTML);
        }
    }, 1000);

    //This determines the state of the entire document
    document.onreadystatechange = function() {
        //Here we selected Interactive event to encounter the Timeout 
        //Load Time or DOM content loaded time can also be used
        if (document.readyState === 'load') {
            console.log(that.countLimit);
            clearInterval(that.pageTime);
        }
    }

    if(id){
        var elem = document.getElementById(id);
        elem.onclick = function(){
            if(callback){
                callback();
            }            
            that.reloadPage();
        };
    }

    //Function to reload the page can be call using the HTML inserted by document.write
    //Can be call on an onclick event of a buttom
    this.reloadPage = function() {
        location.reload();
    }
}
