import { combineReducers } from "redux";

const user = (state = null) => state;

const listings = (state = [], action) => {
  // name has to match the state.js file
  switch (action.type) {
    case "ADD_LISTINGS":
      return [...state, action.value]; // return a copy of state plus a new item aka new listing

    case "REMOVE_LISTING": //single value
      const listing = [...state];
      listing.splice(action.value, 1);
      return listing;
    default:
      return state;

    case "SHOW_SINGLE_LISTING":
      return state;
  }
};

export default combineReducers({ user, listings });
