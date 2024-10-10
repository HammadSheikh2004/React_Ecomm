import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Helper/NavStyle.css';
import { AppBar, Badge, Box, Grid, IconButton, Menu, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import { ShoppingCart, Menu as MenuIcon } from '@mui/icons-material';
import { Context } from '../ContextApi/Context';
import ButtonComp from '../ReuseableComponents/ButtonComp';

const Links = () => {
    const { products, productCount } = useContext(Context);
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const goToCartPage = () => {
        navigate("/cartPage");
    }

    useEffect(() => {
        const savedProducts = localStorage.getItem("productsCount");
        if (savedProducts) {
            productCount(parseInt(savedProducts));
        }
    }, []);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    }

    const goToSignIn = () => {
        navigate('/signin');
    }


    const navLinks = (
        <>
            <NavLink
                className={({ isActive }) => isActive ? "activeNav" : "inactive"}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={({ isActive }) => isActive ? "activeNav" : "inactive"}
                to="/about"
            >
                About
            </NavLink>
            <NavLink
                className={({ isActive }) => isActive ? "activeNav" : "inactive"}
                to="/Products"
            >
                Products
            </NavLink>
            <NavLink
                className={({ isActive }) => isActive ? "activeNav" : "inactive"}
                to="/contact"
            >
                Contact
            </NavLink>
            <div onClick={goToCartPage}>
                <Badge badgeContent={products} color="success">
                    <ShoppingCart style={{ cursor: "pointer", color: 'black' }} />
                </Badge>
            </div>
        </>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed">
                    <Container>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Ecomm
                            </Typography>
                            <Grid display={{ xs: 'none', sm: 'flex' }} gap={2}>
                                {navLinks}
                            </Grid>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                sx={{ display: { xs: 'block', sm: 'none' } }}
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <ButtonComp btnTitle="Sign In" onclick={goToSignIn} />
                        </Toolbar>
                    </Container>

                </AppBar>

                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={toggleDrawer(false)}
                >
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <List>
                            {['Home', 'About', 'Products', 'Contact'].map((text) => (
                                <ListItem button key={text} onClick={() => navigate(`/${text.toLowerCase()}`)}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                            <ListItem button onClick={goToCartPage}>
                                <ListItemText primary="Cart" />
                                <Badge badgeContent={products} color="success">
                                    <ShoppingCart color="action" />
                                </Badge>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </>
    );
};

export default Links;
