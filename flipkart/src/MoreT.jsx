import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import MovingIcon from '@mui/icons-material/Moving';
import GetAppIcon from '@mui/icons-material/GetApp';
import "./MoreT.css";
const MoreT=()=>{
    return(

  <div className="moret">
  <div className="moret__in">
      <NotificationsNoneIcon/>
      <p>Notification Preferrences</p>
  </div>
  <hr />

  <div className="moret__in">
    <HeadsetMicIcon/>
    <p>24*7 Customer Care</p>
  </div>
  <hr />

  <div className="moret__in">
 <MovingIcon />
  <p>Advertise</p>
  </div>
  <hr />

  <div className="moret__in">
<GetAppIcon/>
<p>Download App</p>
  </div>
  <hr />
</div>
    )
}
export default MoreT;