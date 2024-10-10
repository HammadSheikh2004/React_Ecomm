import { Box, Card, CardContent, Container, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import "../Helper/Cart.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import ButtonComp from '../ReuseableComponents/ButtonComp';
import { Context } from '../ContextApi/Context';

const CartPage = () => {
  const [CartProducts, setCartProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const {productCount} = useContext(Context);
  const navigate = useNavigate();

  const navigateToCheckout = () =>{
    navigate('/checkout');
  };

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("carts"));
    if (cartItems) {
      cartItems = cartItems.map(item => ({
        ...item,
        quantity: item.quantity || 1,
        totalPrice: item.quantity * item.price
      }));
      setCartProducts(cartItems);
    } else {
      setCartProducts([]);
    }

  }, []);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = CartProducts.reduce((amount, item) => amount + item.price * item.quantity, 0).toFixed(2);
      setTotal(totalAmount);
    };
    calculateTotal();
  }, [CartProducts]);

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity > 0) {
      const updatedCartProducts = [...CartProducts];
      updatedCartProducts[index].quantity = newQuantity;
      updatedCartProducts[index].totalPrice = newQuantity * updatedCartProducts[index].price;
      setCartProducts(updatedCartProducts);
      localStorage.setItem('carts', JSON.stringify(updatedCartProducts));
    }
  };

 const removeCart = (id) => {
  let cartData = localStorage.getItem('carts');
  if (cartData) {
    let parseData = JSON.parse(cartData);
    const indexToRemove = parseData.findIndex((val) => val.id == id);
    if (indexToRemove > -1) {
      parseData.splice(indexToRemove, 1); // Remove the item from the cart array
      localStorage.setItem('carts', JSON.stringify(parseData)); // Update the carts in localStorage
      setCartProducts(parseData); // Update the state to reflect the changes

      // Update the product count
      const updatedCount = parseData.length; // Count the remaining products
      localStorage.setItem("productsCount", updatedCount); // Update the products count in localStorage
      productCount(updatedCount); // Update the product count in context
    }
  }
};


  return (
    <Container sx={{ marginTop: "80px" }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Id</TableCell>
              <TableCell align='center'>Title</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Image</TableCell>
              <TableCell align='center'>Quantity</TableCell>
              <TableCell align='center'>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {
              CartProducts.map((pro, index) => (
                <>
                  <TableRow key={index}>
                    <TableCell align="center">{pro.id}</TableCell>
                    <TableCell align="center">{pro.title}</TableCell>
                    <TableCell align="center">{pro.totalPrice ? pro.totalPrice : pro.price}</TableCell>
                    <TableCell align="center">
                      <img src={pro.thumbnail} width={80} height={80} alt={pro.title} />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton aria-label="decrease" onClick={() => handleQuantityChange(index, pro.quantity - 1)}>
                        <RemoveIcon />
                      </IconButton>
                      {pro.quantity}
                      <IconButton aria-label="increase" onClick={() => handleQuantityChange(index, pro.quantity + 1)}>
                        <AddIcon />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <IconButton aria-label="delete" onClick={() => removeCart(pro.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>

      <Box component="div" sx={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <Card>
          <CardContent>
            <Typography color="text.secondary" gutterBottom>
              {`Total Price is: ${total}`}
            </Typography>
            <ButtonComp btnTitle="Processed To CheckOut" onclick={navigateToCheckout}/>
          </CardContent>
        </Card>
      </Box>

    </Container>
  );
};

export default CartPage;
