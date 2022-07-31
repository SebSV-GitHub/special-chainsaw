const { Client } = require("@googlemaps/google-maps-services-js");

function fetchNearRestaurants(coords) {
  const { latitude, longitude } = coords;
  const client = new Client({});
  return client.placesNearby({
    params: {
      location: { latitude, longitude },
      radius: 1500,
      type: "restaurant",
      key: process.env.GOOGLE_MAPS_API_KEY,
    },
    timeout: 1000,
  });
}

export { fetchNearRestaurants };
