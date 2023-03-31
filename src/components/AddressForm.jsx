import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateAddress } from "../feature/checkout-slice";

function AddressForm() {
    const address = useSelector(state=>state.checkout?.address)
    const dispatch = useDispatch()
    function updateAddressForm(e) {
        const {name, value} = e.target
        dispatch(updateAddress({[name]:value}))
    }
  return (
    <>
    <Typography variant="h6" gutterBottom>Shopping Address</Typography>
    <Box component='form' onChange={updateAddressForm}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <TextField required id="firstName" name="firstName" label='First Name' fullWidth autoComplete="given-name" variant="standard"/>
                <TextField required id="firstName" name="lastName" label='Last Name' fullWidth autoComplete="family-name" variant="standard"/>    
            </Grid>
            <Grid item xs={12} >
                <TextField required id="address1" name="address1" label='Address Line 1' fullWidth variant="standard"/>
                <TextField required id="address2" name="address2" label='Address Line 2' fullWidth variant="standard"/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField required id="city" name="city" label='City' fullWidth variant="standard"/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField required id="zipcode" name="zipcode" label='Zip Code/Postal Code' fullWidth variant="standard"/>
            </Grid>
            <Grid item xs={12} >
                <TextField required id="country" name="country" label='Country' fullWidth variant="standard"/>
            </Grid>
        </Grid>
    </Box>
    
    
    </>
  )
}

export default AddressForm