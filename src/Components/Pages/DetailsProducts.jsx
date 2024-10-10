import { Box, Container, Grid, Rating, Typography, useMediaQuery } from '@mui/material';
import React, { memo, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import "../Helper/Cards.css";
import ButtonComp from '../ReuseableComponents/ButtonComp';
import { addToCart } from '../Helper/MyFunctions';
import { Context } from '../ContextApi/Context';

const DetailsProducts = () => {
    const location = useLocation();
    const data = location.state.key;
    const { productsCount } = useContext(Context);
    console.log(data);
    const isSmallScreen = useMediaQuery('(max-width: 768px)');
    return (
        <>
            <Container sx={{ marginTop: "80px" }}>
                <Box sx={{ boxShadow: 2, background: 'white', padding: 1, borderRadius: '10px' }}>
                    <Grid container rowSpacing={3}>
                        <Grid item xs={12} sm={6} md={5}>
                            <img
                                src={data.thumbnail}
                                alt={data.title}
                                className='mainImg'
                                style={{ width: isSmallScreen ? '100%' : 350, height: isSmallScreen ? 'auto' : 300 }}
                            />
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginTop: '10px' }}>
                                {Array.isArray(data.images) ? (
                                    data.images.map((image, index) => (
                                        <img
                                            src={image}
                                            alt={data.title}
                                            key={index}
                                            style={{ width: isSmallScreen ? '80px' : 80, height: isSmallScreen ? '200px' : 80 }}
                                        />
                                    ))
                                ) : (
                                    <img
                                        src={data.images}
                                        alt={data.title}
                                        style={{ width: isSmallScreen ? '80px' : 200, height: isSmallScreen ? '200px' : 200 }}
                                    />
                                )}
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={7} sx={{
                            display: isSmallScreen ? 'flex' : 'block',
                            flexDirection: isSmallScreen ? 'column' : 'row'
                        }}>
                            <Typography fontSize={45}>{data.title}</Typography>
                            <Typography fontSize={17}>{data.description}</Typography>
                            <Typography fontSize={17}>USD: {data.price}$</Typography>
                            <Rating
                                name="simple-controFFFFlled"
                                value={data.rating} />
                            <Grid>
                                <ButtonComp btnTitle="Add to Cart" onclick={() => {
                                    if (addToCart(data)) {
                                        productsCount(JSON.parse(localStorage.getItem("carts")).length);
                                        alert("Products Added!");
                                    } else {
                                        alert("Products Already Exists!");
                                    }
                                }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
}

export default memo(DetailsProducts);
