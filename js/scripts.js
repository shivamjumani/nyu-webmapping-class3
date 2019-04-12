// sets up my mapbox access token so they can track the usage of their basemap server

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpdmFtOTk3IiwiYSI6ImNqdWQ5ZDBicDB3bmE0ZHJ2NzF0Zjd4MHAifQ.klvBSqkgGNt7aNjxU7x0Gg';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/light-v9',
  center: [-73.964081,40.784701],
  zoom: 9.5,
});

var popup = new mapboxgl.Popup({ offset: 40 })
.setText('Hello class');
// defining the popup. you didn't have to do this. you could just put this in the popup function below


var marker = new mapboxgl.Marker()
  .setLngLat([-73.969917,40.664494])
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);

// this is just showing how you can call the data
  studentPizzaShops.forEach(function(studentData) {
    console.log(studentData.name)
  })

  // save as variable only if you're calling it later again. Here I'm not doing that so removed var = marker
  // studentPizzaShops.forEach(function(studentData) {
  //   new.mapboxgl.Marker()
  //     .setLngLat([studentData.lng, studentData.lat])
  //     .setPopup(new mapboxgl.Popup({offset: 40})
  //       .setText()
  //   (studentData.name)
  // })
