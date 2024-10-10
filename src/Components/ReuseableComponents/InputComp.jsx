import { TextField } from '@mui/material'
import React from 'react'

const InputComp = ({ input }) => {
    return (
        <>
            <TextField
                id="outlined-basic"
                label={input}
                variant="outlined"
                fullWidth
                sx={{
                    marginBottom: '10px',
                    '& .MuiOutlinedInput-root': {
                        '&.Mui-focused fieldset': {
                            borderColor: 'black',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        '&.Mui-focused': {
                            color: 'black',
                        },
                    },
                }}
            />        </>
    )
}

export default InputComp