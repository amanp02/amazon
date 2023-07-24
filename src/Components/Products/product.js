import StarIcon from '@mui/icons-material/Star';
import  "./products.css";
const Products= ({title,image ,price})=>{
    return(
     <>
    <div className="Products">
        <img src={image} alt=""/>
      
        <div className="ProductInformation">
            <p>{title}</p>
            <div className="ProductsGroup">
                <p className="ProductPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
                        <div className="ProductRating">
                               <StarIcon/>
                               <StarIcon/>
                               <StarIcon/>
                        </div>
                </div>
            </div>
            <button>Add to Kart</button>
        </div>
     </>
    );
};
export default Products;