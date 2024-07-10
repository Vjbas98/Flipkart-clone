import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreT from "./MoreT";
import LoginT from "./LoginT";
const Header =() =>{
    return(
        <div className='header'>
        <div className="header__first">
        <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="flipkart logo" />
</div>
    <div className="header__second">
    <input placeholder="Search for Products,Brands and More" type="text" />
    <SearchIcon />
    </div>
    <div className="header__third">
    <Tippy theme="light" content={<LoginT></LoginT>}interactive={true}>
    <button>Login</button>
    </Tippy>
     </div> 
    <div className="header__fourth">
    <Tippy theme="light"  content={<MoreT></MoreT>} interactive={true}>
    <span>More</span>
    
    </Tippy>
    <ExpandMoreIcon />
    </div>
    <div className="header__fifth">
    <ShoppingCartIcon/>
    <p>Cart</p>
   </div>
   <div className="header__sixth">
   <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
     alt="" />
  <p>Become a seller</p>
   </div>
   <div className="header__seventh">
    <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" alt="" />
   </div>
   </div>
    );
};
export default Header