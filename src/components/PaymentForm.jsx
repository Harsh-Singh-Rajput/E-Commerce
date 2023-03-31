import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useDispatch, useSelector } from 'react-redux'
import { updatePayment } from '../feature/checkout-slice'
export default function PaymentForm() {

    const payment = useSelector(state=>state.checkout?.payment)
    const dispatch = useDispatch()
    function handleChange(e) {
        const {name, value} = e.target
        dispatch(updatePayment({[name]:value}))
    }
  return (
    <>
    <Typography variant='h6' gutterBottom>
        Payment Method
    </Typography>

    <Box component='form' onChange={handleChange}>
        <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
                <TextField variant='standard' name='name' id="name" required label="Name on Card" fullWidth autoComplete='cc-name' defaultValue={payment?.name??""}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField variant='standard' name='cardNumber' id='cardNumber' required label="Card Number" fullWidth autoComplete='cc-number' defaultValue={payment?.cardNumber??""}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField variant='standard' name='expdate' id='expdate' required label="Expiry Date" fullWidth autoComplete='cc-expiry' defaultValue={payment?.expdate??""}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField variant='standard' name='cvv' id='cvv' required label="CVV" type='password' fullWidth autoComplete='cc-csv' defaultValue={payment?.cvv??""}/>
            </Grid>
        </Grid>
    </Box>
    
    
    </>
  )
}
