import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [user]=useAuthState(auth);

    const [cart, setCart] = useCart();
    const [pages,setPages]=useState(0);
    const [page,setPage]=useState(0);
    const [size,setSize]=useState(10); //default number we can not set 0 here as it means num of product per page so we have to show something
     
    const [products, setProducts] = useState([]);

    useEffect( () =>{
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [page,size]); //it will trigger the url when page and size change
    useEffect(()=>{
        fetch(`http://localhost:5000/productCount`)
        .then(res=>res.json())
        .then(data=>{
            const numOfData=data.numOfProduct;
            const numOfPage=Math.ceil(numOfData/size);
            setPages(numOfPage);
        })
        },[size]); //we just changing the number of page in ui applying dependency in size
  


    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        
        setCart(newCart);
        addToDb(selectedProduct._id);
    }
    console.log(pages);
    console.log(user)
    return (
        <div className='shop-container'>
            <div>
            <div className="products-container">
            
            {
                   products.map(product=><Product 
                       key={product._id}
                       product={product}
                       handleAddToCart={handleAddToCart}
                       ></Product>)
               }
            
              
           </div>
            <div className='w-fit mx-auto mb-12'>
                {/*  ${page===number?'bg-neutral-900 text-cyan-50':'bg-slate-600'} making a dynamic page number indication using conditional rendering */}
                {
                  [...Array(pages).keys()].map(number=><button onClick={()=>setPage(number)} className={`mr-3 ${page===number?'bg-neutral-900 text-cyan-50':'bg-gray-100'} px-4 py-4 rounded-md  border-2 drop-shadow-xl`}>{number+1}</button>)
                }
                {/* the number of product we want to display per page*/}
                {/* {size} */}
                <select onChange={e=>setSize(e.target.value)} className='mr-3 hover:bg-neutral-900 hover:text-cyan-50 bg-gray-100 px-4 py-4 rounded-md  border-2 drop-shadow-xl'>
                    
                    <option  value="5">5</option>
                    {/*selected is default value default value  */}
                    <option  value="10" selected>10</option> 
                    <option  value="15">15</option>
                    <option  value="20">20</option>
                </select>
            </div>
            </div>
          
            
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button>Review Order </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;