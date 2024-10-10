import React, { memo, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../ContextApi/Context';
import { addToCart } from '../Helper/MyFunctions';
import { Container, Grid, List, ListItemButton, ListItemText, Typography } from '@mui/material';
import Cards from '../ReuseableComponents/Cards';

const Products = () => {
  const navigate = useNavigate();
  const { apiData, productCount } = useContext(Context);
  const [CatPro, setCatPro] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    if (Array.isArray(apiData)) {
      const categories = [...new Set(apiData.map((item) => item.category))];
      setCatPro(categories);
    }
  }, [apiData]);

  const selectCategory = (category) => {
    const filtered = apiData.filter((item) => item.category === category);
    setFilteredData(filtered);
  };

  const getProducts = (e) => {
    navigate(`/products/${e.id}`, { state: { key: e } });
  };

  return (
    <Container sx={{ marginTop: '80px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Typography variant='h5'>All Category</Typography>
          <List sx={{ bgcolor: 'background.paper' }}>
            {CatPro &&
              CatPro.map((catData, index) => (
                <ListItemButton key={index} onClick={() => selectCategory(catData)}>
                  <ListItemText style={{textTransform:'capitalize'}} primary={catData} />
                </ListItemButton>
              ))}
          </List>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            {filteredData ? (
              filteredData.map((data, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Cards
                    title={data.title}
                    img={data.thumbnail}
                    desc={data.description}
                    click={() => getProducts(data)}
                    addToCart={() => {
                      if (addToCart(data)) {
                        productCount(JSON.parse(localStorage.getItem('carts')).length);
                        alert('Products Added!');
                      } else {
                        alert('Products Already Exists!');
                      }
                    }}
                  />
                </Grid>
              ))
            ) : (
              apiData &&
              apiData.slice(0, 12).map((data, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Cards
                    title={data.title}
                    img={data.thumbnail}
                    desc={data.description}
                    click={() => getProducts(data)}
                    addToCart={() => {
                      if (addToCart(data)) {
                        productCount(JSON.parse(localStorage.getItem('carts')).length);
                        alert('Products Added!');
                      } else {
                        alert('Products Already Exists!');
                      }
                    }}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default memo(Products);
