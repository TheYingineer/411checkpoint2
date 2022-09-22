export const addNewListing = (listings) => {
    return {
      type: "ADD_LISTINGS",
      value: listings, // need to match reducer
    };
  };
  
  export const removeSingleListing = (index) => {
    return {
      type: "REMOVE_LISTING",
      value: index,
    };
  };


  //added new*
  export const showSingleListing = (index) => {
    return {
      type: "SHOW_SINGLE_LISTING",
      value: index,
    };
  };