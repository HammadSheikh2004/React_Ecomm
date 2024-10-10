import { Container, Grid, TextareaAutosize } from '@mui/material'
import React from 'react'
import InputComp from '../ReuseableComponents/InputComp'
import HeadingComp from '../ReuseableComponents/HeadingComp'
import ButtonComp from '../ReuseableComponents/ButtonComp'

const Contact = () => {
  return (
    <>
      <HeadingComp heading="Contact Us" />
      <Container sx={{ marginTop: "80px" }}>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3029561847075!2d67.1494969743657!3d24.88764574417105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33999ec8ecc87%3A0xda9cc5004c86e53f!2sMETRO%20Stargate%20Store%2C%20Karachi!5e0!3m2!1sen!2s!4v1717291857046!5m2!1sen!2s" height='300px' width="100%" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <InputComp input="Name" />
            <InputComp input="Email Address" />
            <InputComp input="Phone" />
            <TextareaAutosize minRows={5} placeholder='Enter Your Query!' style={{fontSize:'20px', padding:'10px', width:'100%'}}/>
            <ButtonComp btnTitle="Submit Now"/>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Contact;
