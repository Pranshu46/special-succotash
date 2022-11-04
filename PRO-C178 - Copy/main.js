var qutb = document.querySelectorAll('#qutb')
var tomb = document.querySelectorAll('#tomb')
var qila = document.querySelectorAll('#qila')


let latitude=28.705647612285794, longitude=77.21000884035571; 
// Initializing Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoicHJhbnNodXNpbmdoIiwiYSI6ImNsYTJtNmtrOTAxdHkzbm83eng5bngwZTkifQ.sA_e_4vWy3sqQN3tEY9Tbg';
var map = new mapboxgl.Map({ 
    container: 'map', 
    style: 'mapbox://styles/mapbox/satellite-streets-v11', 
    center: [longitude, latitude], zoom: 12 
});

var marker1 = new mapboxgl.Marker({
    element: qutb
}).setLnglat([28.5245, 77.1855]).addto(map)
var marker2 = new mapboxgl.Marker({
    element: qila
}).setLnglat([28.6096, 77.2437]).addto(map)
var marker3 = new mapboxgl.Marker({
    element: tomb
}).setLnglat([28.5930, 77.2510]).addto(map)

map.addControl( 
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl:mapboxgl,
    })
    )
