import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid, Pagination, Typography } from '@mui/material';
import React, { useContext } from 'react'
import { Context } from '../ContextApi/Context';
import Cards from '../ReuseableComponents/Cards';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Helper/MyFunctions';
import Banner_Image1 from '../../assets/images/banner_img1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Home = () => {
  const navigate = useNavigate();
  const { apiData, productCount } = useContext(Context);
  const getProducts = (e) => {
    console.log(e);
    navigate(`/products/${e.id}`, { state: { key: e } });
  }

  return (
    <>

      <CardMedia
        component="img"
        height="410"
        sx={{ marginTop: '65px' }}
        image={Banner_Image1}
        alt="Home Banner"
      />

      <Container sx={{ marginTop: "80px" }}>
        <Swiper slidesPerView={3} spaceBetween={30} breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}>
          {
            apiData ? apiData && apiData.map((data, index) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <Cards title={data.title} img={data.thumbnail} desc={data.description} click={() => { getProducts(data) }} addToCart={() => {
                      if (addToCart(data)) {
                        productCount(JSON.parse(localStorage.getItem("carts")).length);
                        alert("Products Added!");
                      } else {
                        alert("Products Already Exists!");
                      }
                    }} />
                  </SwiperSlide>
                </>

              )
            })
              : <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%' }}>
                <CircularProgress />
              </Box>
          }
        </Swiper>



      </Container>
    </>
  )
}

export default Home