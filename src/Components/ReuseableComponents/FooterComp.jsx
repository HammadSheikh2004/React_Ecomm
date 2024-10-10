import { Box, colors, Container, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'

const FooterComp = () => {
    return (
        <>
            <Box component="section" sx={{ backgroundColor: "#1976d2", padding: '20px', marginTop: '5px', borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
                <Container sx={{textAlign: 'center', color:'white'}}>
                    <Typography>
                        &copy; All Right Reserved
                    </Typography>
                </Container>
            </Box>

        </>
    )
}

export default FooterComp