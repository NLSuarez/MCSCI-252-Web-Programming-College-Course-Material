function initialize() {
    
    //Starting here is the required geojson code formed into a variable.
    
    var data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.93767166137694,
          37.672815485559056
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.7346739768982,
          37.691682353720765
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.92152738571167,
          37.684219391339255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.68952178955077,
          36.8026702133611
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.61247253417967,
          36.76004890550042
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.03978061676025,
          37.985204336049186
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.10526704788208,
          32.954142375625416
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.48382031917572,
          37.782256211189726
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.75303649902344,
          36.878183110462686
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.92099094390868,
          37.26513491740761
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.2299814224243,
          37.763085862234384
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -121.7779755592346,
          37.79745835438579
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.96182763576508,
          37.697756599701805
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.5925760269165,
          36.49768323678756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.94490826129913,
          37.67337595673144
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -120.97076207399368,
          37.683582585033456
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -119.58861172199249,
          36.78800033166547
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.0206755399704,
          34.023458177067845
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -117.27109730243683,
          34.051894956151834
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [
          -118.38444471359253,
          46.04411335336058
        ]
      }
    }
  ]
}
    
    //End json data.
    
    //Start initial map parameters.
    var mapOptions = {
        center: { lat: 37.000, lng: -121.700},
        zoom: 5
    };
    
    //End initial map parameters
    
    //Create new map in the div element id'ed as map-canvas
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    /*
    Special note: If you are loading a json object from a local server, use loadGeoJson('link').
    In my case, though, my computer is protected by most browsers as a security measure, so I can't do this.
    To get around that safeguard, I add the geojson code DIRECTLY into the javascript document as a variable and
    reference the variable while calling the method addGeoJson with the variable as a parameter.
    */
    
    map.data.addGeoJson(data);
}

//Add event listener to execute the function initialize() after the window loads
google.maps.event.addDomListener(window, 'load', initialize);