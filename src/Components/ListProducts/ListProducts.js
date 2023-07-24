import "./ListProducts.css"
import Products from "../Products/product";
const ListProducts = () => {
    return(
    <>
    <div>
           {/*Home row*/};
           <div className="HomeRow">
             <Products 
             title="Vivo Y56" 
             price={200000} 
             image="https://m.media-amazon.com/images/I/41xnfQ6+TCL._AC%20
             _SY200_.jpg"
             />
             <Products 
             title="IQOO Z7S" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/41bLD50sZSL._AC_SY200_.jpg"
             />
              <Products 
             title="Apple 13" 
             price={2000} 
             image="https://m.media-amazon.com/images/I/41kP-qu5D+L._AC_UF226,226_FMjpg_.jpg"
             />
              <Products 
             title="Vivo Y56" 
             price={250000} 
             image="https://m.media-amazon.com/images/I/41OTV3--tOL._AC_SR400,600_.jpg"
             />
              <Products 
             title="POCO" 
             price={100000} 
             image="https://m.media-amazon.com/images/I/51sus6a8D+L._AC_UF226,226_FMjpg_.jpg"
             />
             </div>
             {/* second row*/}
             <div className="HomeRow">
             <Products 
             title="Vivo Y59" 
             price={200000} 
             image="https://m.media-amazon.com/images/I/41xnfQ6+TCL._AC%20
             _SY200_.jpg"
             />

             <Products 
             title="Apple Airpodes" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/31Ri-FAMBUL._AC_SY200_.jpg"
             />
             
              
             </div>
             {/*third row*/}
             <div className="HomeRow">
             <Products 
             title="Black Tee" 
             price={2800} 
             image="https://m.media-amazon.com/images/I/71XzkX0cibL._AC_SY200_.jpg"
             />
             <Products 
             title="Leo" 
             price={1500} 
             image="https://m.media-amazon.com/images/I/61QyQ3kotPL._AC_SY200_.jpg"
             />
             <Products 
             title="O-Size" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/61gb68vvjkL._AC_SY200_.jpg"
             />
             <Products 
             title="Blue-Tee" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/61EoGCAOV+L._AC_SY200_.jpg"
             />
             </div>
             {/*fourth row*/}
             <div className="HomeRow">
             <Products 
             title="Vivo Y56" 
             price={200000} 
             image="https://m.media-amazon.com/images/I/71NZuTjNqCL._AC_SY120_.jpg"
             />

             <Products 
             title="Apple Airpodes" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/81dzUeK50bL._AC_SY200_.jpg"
             />
             <Products 
             title="Apple Airpodes" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/51MTW5OKkUS._AC_SY200_.jpg"
             />
             <Products 
             title="Apple Airpodes" 
             price={15000} 
             image="https://m.media-amazon.com/images/I/41uGjvXbeBL._AC_SY200_.jpg"
             />
             <Products 
             title="Leather Shoes" 
             price={1700} 
             image="https://m.media-amazon.com/images/I/51kdwtY1KvL._AC_SY200_.jpg"
             />
             

              
             </div>
    </div>
    
    </>
   ) ;
};
    
    export default ListProducts;