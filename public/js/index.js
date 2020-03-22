//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var current_url= window.location.pathname;//content after domain 
var current_url_query = window.location.search; //url contents after ?
var current_domain = window.location.host;//domain en port//use this on live


//change protocol to unsecured if coming from unsecured site ::
var http_https = "https://"; 

if(location.protocol === 'http:'){
	http_https = 'http://';//return http
}

//hide or show div

function show_hide(div, to_show_hide = 'hide'){

    //if  show_hide = 'hide'; then hide the html division else show it
    to_show_hide == 'hide'?document.getElementById(div).style.display='none' : document.getElementById(div).style.display='display';
}


