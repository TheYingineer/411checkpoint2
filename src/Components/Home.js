import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Home = (props) => {
  return (
    <Container maxWidth="lg" className="home-container">
      <h4>Welcome, {props.user.username}</h4>
      {console.log(props)}
      <div className="flex-container">
        {/* <Chart /> */}
        {/* <Total /> */}
        {/* <AddCar carTotal={props.cars.length} /> */}
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Business Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, idx) => (
            <TableRow key={listing.id}>
              <TableCell component="th" scope="row">
                {listing.id}
              </TableCell>
              <TableCell>{listing["Name"]}</TableCell>
              <TableCell>{listing["Description"]}</TableCell>
              <TableCell>{listing["Hours"]}</TableCell>
              <TableCell>{listing["Address"]}</TableCell>
              <TableCell>
                <DeleteIcon
                  onClick={() => props.removeSingleListing(idx)}
                  className="icon text-red"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Home;
