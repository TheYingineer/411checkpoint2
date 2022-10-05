import React, { Component, Fragment } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

class AddNewListing extends Component {
  state = {
    // for class componenets only, this is the local state, when you need to acces the local state, call "this.state"
    open: false,
    id: null,
    Name: "",
    Description: "",
    Hours: "",
    Address: "",
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    // resetting what's in the text box
    const newState = { ...this.state }; //copy the state as new state
    newState[e.target.id] = e.target.value; //targeting "e.target.id" is the index inside of the newState, and whatever that value is becomes the new event.target.value
    this.setState(newState); //puts the new values over the new memory
  };

  handleSubmit = (e) => {
    e.preventDefault(); //keep the text from deleting itself, otherwise it will keep refreshing it for you and delete everything
    const payload = { ...this.state }; // accessing local state
    // payload.id = this.props.listTotal + 1 //this.props should reference back to the container
    delete payload.open;
    console.log("The New Listing", payload);
    console.log(this.props);
    // add this.props.addNewListing function here from redux actions.js
    // also add this.setState to close the dialog
    this.props.addNewListing(payload);

    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        Name: "",
        Description: "",
        Hours: "",
        Address: "",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <h1>Add New Listing:</h1>
          <Button
            variant="contained"
            className="add-New-Listing"
            onClick={this.toggleDialog}
          >
            Add New Listing
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add New Listing</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TextField
                  id="Name"
                  placeholder="Name"
                  value={this.state.Name}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Description"
                  placeholder="Description"
                  value={this.state.Description}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Hours"
                  placeholder="Hours"
                  value={this.state.Hours}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Address"
                  placeholder="Address"
                  value={this.state.Address}
                  onChange={this.handleTextChange}
                  required
                />
                <br />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

export default AddNewListing;
