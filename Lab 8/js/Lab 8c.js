/*
Name: Stefan Suarez
Assignment: Lab 8c
*/

//Data variable referenced in this file is stored in its own js file.
//This was done for clarity.
    
//Global Variables
var map;
var geocoder;

/*My first attempt at jQuery in an assignment. It performs the same
function that an onload condition would.*/

$(document).ready(function() {
        initialize();
});

function initialize() {
    
    //Start initial map parameters.
    geocoder = new google.maps.Geocoder();
    
    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 2
        /*The following code block breaks the map, and is actually
        uneccsary because the controls are already added by default. 
        Still, it's useful to include it for future reference. :-)
        
        mapTypeControl: true,
        mapTypeControlOptions: {style: google.maps.MapTypeControl.DROPDOWN_MENU},
        navigationControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP*/
    };
    //End initial map parameters
    
    //Create map
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    
    //Apply GeoJson data layer.
    map.data.addGeoJson(data);
}

/*The following code took FOREVER to find and is largely present in "http://geocodezip.com/v3_zoom2countrySelectList.html". The main functionality comes from that program. I have added in comments, though, to help me understand the various parts.*/

function findAddress(address) {
    
    /*If there is no address variable, create one from the countryselect
    selection box.*/
    
    if (!address) {
        var address=document.getElementById("countryselect").value;
    }
    
    /*If the new address variable does not equal an empty space, which is
    the value of the initial option in the selection box, and the
    geocoder variable exists, execute the geocode service for the
    selected address.*/
    
    if ((address !== '') && geocoder) {
        geocoder.geocode({'address': address}, function(results, status)                {
            
            /*The addListenerOnce command is the addition of a listener
            that only activates in the scope of this function and once,
            rather than being global. (To my understanding, at least.)
            In this case, that portion was removed because its only
            purpose was to activate the removed centerChanged function.*/
            
            
            /*Was the geocoder request a success?*/
            
            if (status === google.maps.GeocoderStatus.OK) {
                
                /*Did the geocode request actually return results?
                (ZERO_RESULTS is an error that appears if the Geocoder
                thinks it was passed an erroneous address)*/
                
                if (status !== google.maps.GeocoderStatus.ZERO_RESULTS) {
                    
                    /*If the necessary results variables exist and
                    the formated_address field is equal to Antarctica.*/
                    
                    if ((results && results[0] && results[0].formatted_address) && (results[0].formatted_address === "Antarctica")) {
                        map.setCenter(new google.maps.LatLng(-75,0));
                        map.setZoom(3);
                    } else if (results && results[0] && results[0].geometry && results[0].geometry.viewport) {
                        map.fitBounds(results[0].geometry.viewport);
                        
                        /*If the viewport field exists, adjust the map
                        around that viewport.*/
                    } else if (results && results[0] && results[0].geometry && results[0].geometry.bounds) {
                        map.fitBounds(results[0].geometry.bounds);
                        
                        /*If the bounds field exists, adjust the map
                        around those bounds*/
                    } 
                    
                } else {
                    
                    /*If ZERO_RESULTS is received, an alert will appear
                    saying "No results found."*/
                    
                    alert("No results found");
                } 
            } else {
                
                /*If geocode did not work at all, display the 
                reason why as received by the server error.*/
                
                alert("Geocode was not successful for the following reason: " + status);
                    }
                        
                });
    }
}

/*centerChange() function removed due to not being needed. It's only
needed if you plan to input fake selections in the list that might
return latitudes and longitudes beyond the borders of the globe(like
having a latitude below -85 degrees). If it received an error like that
it would reset the center and zoom to some arbitrary values.*/
