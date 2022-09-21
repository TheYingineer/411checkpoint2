// rfc
import React from "react";
import { Container, Chip } from "@mui/material";
import { useParams } from "react-router-dom";
// import { showSingleListing } from "../redux/actions";

// import BizDetails from '../containers/BizDetails';
const BizDetails = (props) => {
  const id = useParams().id;
  const listing = props.listings.find((list) => list.id === Number(id));  // props.listings == the key to access the state.js in redux
  return (
    <div>
      <h2>{listing.Name}</h2>
      {Object.keys(listing).map((key, idx) => {
        return <Chip key={idx} label={`${key}: ${listing[key]}`}></Chip>;
      })}
    </div>
  );
};

export default BizDetails;

// const showSingleListing = (props) => {
//   const id = props.match.params.id;
//   console.log(id);
//   const listing = props.listings.find((l) => l.id === id);
//   console.log(listing);

//   return (
//     <div>
{
  /* <h1>{props.listing[id]}</h1>
        <h2>{props.listing.Address}</h2>
        <h3>{props.listing.Hours}</h3>
        <h4>{props.listing.Description}</h4>  */
}

//       <Container>
//         <h2>{listing.name}</h2>
//         {Object.keys(listing).map((key, id) => {
//           return <Chip label={`${key}: ${listing[key]}`}></Chip>;
//         })}
//       </Container>
//     </div>
//   );
// };

// export default showSingleListing;
