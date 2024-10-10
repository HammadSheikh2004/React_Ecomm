import { Box, Container } from '@mui/material'
import React from 'react'

const HeadingComp = ({heading}) => {
    return (
        <>
            <Box component="div" sx={{ backgroundColor: '#1976d2', padding: "20px", textAlign: 'center', color: "#fff", height: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Container sx={{ marginTop: '80px' }}>
                    <h1>{heading}</h1>
                </Container>
            </Box>
        </>
    )
}

export default HeadingComp