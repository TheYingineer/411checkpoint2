// Navigation Bar
//rfc
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

export default function AddNewListing() {
  return (
    <div class = "AddNewListingBox">
      <Box class = "AddNewListingForm">
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
        <Button variant="contained">SAVE</Button>
      </Box>
    </div>
  );
}

// Form on the left

// map on the right
