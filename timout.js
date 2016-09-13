ageTime = setInterval(function() {
    count += 1;
    if (count === 20) {
        clearInterval(pageTime);
        document.write("Code FOr Page To Be Displayed Here");
    }
}, 1000);
document.onreadystatechange = function() {
    if (document.readyState === 'interactive') {
        clearInterval(pageTime);
    }
}

function reloadIM() {
    _gaq.push(['_trackPageview', '/IMartEvents/Timeout/Refresh' + document.location.pathname]);
    location.reload();
}
