import React, { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import DetailsPage from '../DetailsPage/DetailsPage';
import Error from '../Error/Error';
import { addToDb, getStoredCart } from '../utilities/fakeDb';


const Details = ({data}) => {
    const { products, initialCart } = useLoaderData()
    const {details_id}=useParams()
    const [cart, setCart] = useState([]);
    const jobs = products
    

    const founded = (jobs,details_id) => {
        const found = jobs.filter(job=> job.id == details_id)
        return found
        
    }
    
    const got = founded(jobs,details_id)

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = got.find(product => product.id === id);
            if(addedProduct){
                // const quantity = storedCart[id];
                // addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
            
        }
        setCart(savedCart);
        
    }, [got])
    

    const handleAddToCart = (selectedProduct) =>{
        // console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            // newCart = [...cart, selectedProduct];
        }
        // else{
        //     const rest = cart.filter(product => product.id !== selectedProduct.id);
        //     exists.quantity = exists.quantity + 1;
        //     newCart = [...rest, exists];
        // }
        
        setCart(newCart);
        addToDb(selectedProduct.id);
    }


    
    
    return (
        <div>
            {
               got.map((gt) => (
                <DetailsPage key={gt.id} gt={gt} handleAddToCart={handleAddToCart}></DetailsPage>
              ))
            }
        </div>

    );
};

export default Details;