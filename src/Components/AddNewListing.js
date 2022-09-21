// Navigation Bar
//rfc
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export default function AddNewListing() {
  return (
    <Container className="AddNewListContainer">
      <div className="AddNewListingBox">
        <Box className="AddNewListingForm">
          <TextField
            id="standard-search"
            label="Name"
            type="search"
            variant="standard"
          />
          <TextField
            id="standard-search"
            label="Description"
            type="search"
            variant="standard"
          />
          <TextField
            id="standard-search"
            label="Address"
            type="search"
            variant="standard"
          />
          <TextField
            id="standard-search"
            label="Hours"
            type="search"
            variant="standard"
          />
        </Box>
        <Button variant="contained">SAVE</Button>
      </div>
      {/* <img src="\mappic.png" alt="map pic" width="300px" /> */}
    </Container>
  );
}

// Form on the left

// map on the right
