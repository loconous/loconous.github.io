import "./topbar.scss"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
         <div className="wrapper">
           <div className="left">
             <a href="#intro" className="logo">
               loconous.
             </a>
             <div className="itemContainer">
               <PhoneAndroidIcon className="icon"/>
                <span>+1 (865) 963-8208</span>
             </div>
             <div className="itemContainer">
               <MailOutlineIcon className="icon"/>
                <span>lgonzalvill@gmail.com</span>
             </div>
           </div>
           <div className="right">
           </div>
         </div>
    </div>
  )
}
