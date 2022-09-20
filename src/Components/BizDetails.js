// rfc
import React from "react";
import { Container, Chip, TableBody } from "@mui/material";
// import BizDetails from '../containers/BizDetails';

export default function showSingleListing(props) {
  const id = this.props.match.params.id;
  console.log(id);
  const biz = this.props.listings.find((listings) => listings.id == id);
  console.log(biz);

  return (
    <div>
      {/* <h1>{props.biz[id].Name}</h1>
        <h2>{props.biz.Address}</h2>
        <h3>{props.biz.Hours}</h3>
        <h4>{props.biz.Description}</h4>  */}

      <Container>
        <h2>{biz.name}</h2>
        {Object.keys(biz).map((key, id) => {
          return <Chip label={`${key}: ${biz[key]}`}></Chip>;
        })}
      </Container>
    </div>
  );
}
