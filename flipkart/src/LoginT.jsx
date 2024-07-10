import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import "./LoginT.css";
const LoginT =() =>{
    return(
        <div className="logint">
 <div className="logint__in">
  <h2>New Customer?</h2> <h2>Sign Up</h2>
 </div>
 <hr />
 <div className="logint__in">
<AccountCircleIcon/>
<p>My Profile</p>
 </div>
 <hr />
 <div className="logint__in">
 <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg" alt="" />
<p>Flipkart Plus</p>
 </div>
 <hr />
 <div className="logint__in">
<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg" alt=""/>
<p>Orders</p> 
</div>
<hr />
 <div className="logint__in">
  <FavoriteBorderIcon/>
 <p>Wishlist</p>
 </div>
 <hr />
 <div className="logint__in">
<RedeemIcon/>
<p>Rewards</p>
 </div>
 <hr />
 <div className="logint__in">
<img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg" alt=""/>
 <p>Gift Cards</p>
 </div>
<hr />
        </div>
    );

};
export default LoginT;