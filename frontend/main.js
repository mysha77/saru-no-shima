var quests = [
{
  id: '1',
  name: 'hello',
  character: 'Alex',
  location: [ -33.846235, 151.231714 ],
  questions: [
    {
      question: "Hello",
      correct: ['Hello'],
      neutral: ['Um', 'Er'],
      wrong: ['Go away']
    }
  ]
},
{
  id: '2',
  name: 'train ticket',
  character: 'Sam',
  location: [ -33.858667, 151.214028 ],
  questions: [
    {
      question: "How may I help you?",
      correct: ["I'd like to buy a train ticket"],
      neutral: ["Train ticket?", "Buy ticket?"],
      wrong: ["I want to buy a fish"]
    }
  ]
},
];

var characters = {
  "Alex": "http://img1.appstatic.opera.com/prodimgres/mo_icon_big_thumb_269332.png",
  "Sam": "https://cdn1.iconfinder.com/data/icons/free-large-boss-icon-set/128/Uncle_Sam.png"
};

var infowindow = new google.maps.InfoWindow({
  content: "hello world - replace this with the questions HTML"
});

function initialize() {
  // Sets up the map
  var styles = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  },
  {
    featureType: "water",
    stylers: [
      { color : "#05065E" }
    ]
  },
  {
    featureType: "road",
    stylers: [
      { color : "#FFFFFF" },
      { visibility: "simplified" }
    ]
  },
  {
    featureType: "landscape",
    stylers: [
      { color : "#36375C" }
    ]
  },
  {
    featureType: "poi",
    stylers: [
      { color : "#535499" }
    ]
  }
  ];


  var mapOptions = {
    center: new google.maps.LatLng(-33.846235, 151.231714),
    zoom: 14,
    //disableDefaultUI: true
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  map.setOptions({styles: styles});

  // Add markers for the quests.
  for (var i = 0; i < quests.length; ++i) {
    var q = quests[i];
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(q.location[0], q.location[1]),
      map: map,
      title: q.name,
      icon: characters[q.character],
    });
    marker.data = q;
    google.maps.event.addListener(marker, "click", function() {
      infowindow.setContent(this.data.questions[0].question);
      infowindow.open(map, this);
    });
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
