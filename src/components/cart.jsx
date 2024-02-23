import { useState } from "react";


const Cart = ({cart,setCart}) => {
    let subtotal = cart.reduce((sum,x,)=>{
        return sum+x.price
    },0)
  
  


    return ( 
        <div className="cart">
           

             {cart.map(data =>(
             <div className="cartname">
                <h1>{data.title}</h1>
                <img src={data.thumbnail} alt="" />
            </div>
         )

         )
         }

           <h1>subTotal:- Rs:{subtotal}</h1> 
            
        </div>
     );
}
 
export default Cart;

