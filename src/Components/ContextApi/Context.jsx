import React, { createContext, useEffect, useState } from 'react'
import Routing from '../Routing/Routing';
import Links from '../Routing/NavLinks';
import FooterComp from '../ReuseableComponents/FooterComp';
import { useLocation } from 'react-router-dom';
export const Context = createContext();
const ContextApi = () => {

    const [apiData, setApiData] = useState(null);
    const [products, setProducts] = useState(0)

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                return res.json();
            }).then((data) => {
                setApiData(data.products);
            });


        const savedProducts = localStorage.getItem("productsCount");
        if (savedProducts) {
            productCount(parseInt(savedProducts));
        }

    }, []);

    const productCount = (count) => {
        setProducts(count);
        localStorage.setItem("productsCount", count);
    }

    return (
        <>
            <Context.Provider value={{ apiData, products, productCount }}>
                <MainComponent />
            </Context.Provider>
        </>
    )
}

const MainComponent = () => {
    const location = useLocation();
    const showHeaderFooter = location.pathname.trim() !== "/signin";
    return (
        <>
            {showHeaderFooter && <Links />}
            <Routing />
            {showHeaderFooter && <FooterComp />}
        </>
    )
}


export default ContextApi