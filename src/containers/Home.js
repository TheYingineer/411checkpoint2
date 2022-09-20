import { connect } from "react-redux";
import Home from "../Components/Home"
import { removeSingleListing, addNewListing, showSingleListing } from "../redux/actions";


const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewListing: (listings) => dispatch(addNewListing(listings)),
    removeSingleListing: (index) => dispatch(removeSingleListing(index)),
    showSingleListing: (index) => dispatch(showSingleListing(index)), // add NEW*
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
