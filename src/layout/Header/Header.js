import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn' ;
const Header= ()=>{
    return(
        <>
        <nav className="header">
           <div className="headerTop">
              <div className="headerLeftNav">
                
              <MenuIcon />
              </div>
              {/*  logo*/}
            <Link to="/">
                <img src="https://pngimg.com/uploads/amazon/amazon_PNG28.png" alt="" className="logo"/>
            </Link>
              {/*  logo*/}
              {/* search Box */}
              <div className="headerSearch">
                <input type ="text" className="headerSearchInput"/>
                <SearchIcon className="headerSearchIcon" />
              </div>
              {/* search Box */}

              {/*Links */}
              <div className="headerNavbar">
                <Link to="/Login"
                className="headerLink">
                    <div className="headerOptions">
                        <span className="headerOption_One">Hello</span>
                        <span
                        className="headerOption_Two">Users</span>
                    </div>
                </Link>
                {/* return order*/}
                <Link to="/Orders"
                className="headerLink">
                    <div className="headerOptions">
                        <span className="headerOption_One">Return</span>
                        <span
                        className="headerOption_Two">order</span>
                    </div>
                </Link>
                {/* prime*/}
                <Link to="/"
                className="headerLink">
                    <div className="headerOptions">
                        <span className="headerOption_One">Try</span>
                        <span
                        className="headerOption_Two">prime</span>
                    </div>
                </Link>
                {/* order*/}
                <Link to="/Profile"
                className="headerLink">
                    <div className="headerOptions">
                        <span className="headerOption_One">Your</span>
                        <span
                        className="headerOption_Two">Profile</span>
                    </div>
                </Link>
                {/* basket*/}
                <Link to="/Cart"
                className="headerLink">
                    <div className="headerOptions_Basket">
                         <ShoppingBasketIcon/>
                        <span
                        className="headerOption_Two basketCount" >4</span>
                    </div>
                </Link>
              </div>
              {/*Links*/}
            </div>
            {/* nav bar */}
            <div className="headerBottom">
                <div class="headerAddress_Icon">
                 <LocationOnIcon />
                </div>
                <div>
                <div className="headerOptions">
                        <span className="headerOption_One">Delivery to</span>
                        <span
                        className="headerOption_Two">Address</span>
                    </div>
                </div>
              <div  className="headerbottom_Navbar">
              <span>
                    <Link to ="/ListProducts" className="headerLink">All product</Link>

                </span>
                <span>Book</span>
                <span>New Release</span>
                <span>gifts ideas</span>
                <span>gifts ideas</span>
                <span>Amazon Ideas</span>
              </div>
            </div>
            {/* nav bar */}
            </nav>
        </>
    );
};

export default Header;