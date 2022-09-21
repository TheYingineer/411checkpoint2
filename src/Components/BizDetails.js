// rfc
import React from "react";
import { Container, Chip } from "@mui/material";
// import { useParams } from 'react-router-dom';
import { params } from "react-router-dom";

// import BizDetails from '../containers/BizDetails';

export default function showSingleListing(props) {
  const id = props.match.params.id;
  console.log(id);
  const listing = props.listings.find((listings) => listings.id === id);
  console.log(listing);

  return (
    <div>
      {/* <h1>{props.listing[id].Name}</h1>
        <h2>{props.listing.Address}</h2>
        <h3>{props.listing.Hours}</h3>
        <h4>{props.listing.Description}</h4>  */}

      <Container>
        <h2>{listing.name}</h2>
        {Object.keys(listing).map((key, id) => {
          return <Chip label={`${key}: ${listing[key]}`}></Chip>;
        })}
      </Container>
    </div>
  );
}
