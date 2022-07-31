import { fetchNearRestaurants } from "./places.dao";

function getNearRestaurants(coords) {
  return fetchNearRestaurants(coords);
}

export { getNearRestaurants };
