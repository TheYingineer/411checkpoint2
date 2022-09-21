import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@mui/material'

class AddNewListing extends Component {
    state = {
        open: false,
        id: null,
        Name: '',
        Description: '',
        Hours: '',
        Address: '',
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.carTotal + 1
        delete payload.open
        console.log("The New Listing", payload)
        // add this.props.addNewListing function here from redux actions.js
        // also add this.setState to close the dialog
        this.props.addNewListing(payload)
        this.setState({ open: false })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
             
              Name: '',
              Description: '',
              Hours: '',
              Address: '',
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div style={{ textAlign: 'center' }}>
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
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle>Add New Listing</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="Name" 
                                    placeholder="Name" 
                                    value={this.state.Name} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="Description" 
                                    placeholder="Description" 
                                    value={this.state.Description} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="Hours" 
                                    placeholder="Hours" 
                                    value={this.state.Hours} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <TextField 
                                    id="Address" 
                                    placeholder="Address" 
                                    value={this.state.Address} 
                                    onChange={this.handleTextChange} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddNewListing