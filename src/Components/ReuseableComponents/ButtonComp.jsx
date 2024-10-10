import { Button } from '@mui/material'
import React from 'react'

const ButtonComp = ({ btnTitle, onclick, sx }) => {
    return (
        <>
            <Button size="small" variant='contained'  sx={{marginLeft:'5px', marginTop:'3px'}} color='primary' onClick={ onclick }>{btnTitle}</Button>
        </>
    )
}

export default ButtonComp