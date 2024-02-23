import { useState,useEffect } from "react";
import {  useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  "../styles/singleproduct.css"
const Singleproduct = ({cart,setCart}) => {
let navigate=useNavigate()
let params=useParams()
let id=params.id
    let [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
           
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
           };

        fetchData();
    }, []);

    let back =()=>
    {
        navigate('/')
    }
    


    return ( 
        <div className="single">
            <img src={product.thumbnail} alt="" />
            <h1>{product.title}</h1>
           <button onClick={back}>Back</button>
            <button onClick={()=>setCart([...cart,product])}>Add to cart</button>
        </div>
     );
}
 
export default Singleproduct;