import { connect } from "react-redux";
import AddNewListing from "../Components/AddNewListing"; //AddNewListing is the file name
import { addNewListing } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addNewListing: (index) => dispatch(addNewListing(index)),
  };
};

export default connect(null, mapDispatchToProps)(AddNewListing);


