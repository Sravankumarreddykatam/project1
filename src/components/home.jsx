import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css"
const Home = () => {
    let [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
           
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProduct(data.products);
           };

        fetchData();
    }, []);

    return (
        <div className="homepage">
            {
                product.map((data) => (
                    <div className="products" >

                    <div className="leftimage">
                        <img src={data.thumbnail} alt="" />
                      
                        <div className="details">
                        <h2>Title: {data.title}</h2>
                        <h3>Brand: {data.brand}</h3>
                           <h3>Price: {data.price}</h3>
                          <h4>Description: {data.description}</h4>
                          <br />
                         <Link id="view"  to ={`/${data.id}`}>View</Link>
                        </div>
                           
                      
                        
                        </div>
                    </div>
                ))
          }
        </div>
    );
};

export default Home;
