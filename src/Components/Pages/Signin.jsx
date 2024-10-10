import { Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Signin = () => {


    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };


    return (
        <>
            <div style={{ padding: 30 }}>
                <Paper>
                    <Typography sx={{textAlign:'center', my:'20px', fontSize:'30px', fontWeight:'bold'}}>SignIn</Typography>
                    <Grid
                        container
                        spacing={3}
                        direction={'column'}
                        justify={'center'}
                        alignItems={'center'}
                    >
                        <Grid item xs={12}>
                            <TextField label="Username" type={'text'}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField label="Password" type={'password'}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        label={'Keep me logged in'}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label="Keep me logged in"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth> Login </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </>
    )
}


export default Signin