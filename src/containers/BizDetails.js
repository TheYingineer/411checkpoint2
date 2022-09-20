import { connect } from "react-redux";
import BizDetails from "../Components/BizDetails"
import { showSingleListing } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showSingleListing: (index) => dispatch(showSingleListing(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BizDetails);


