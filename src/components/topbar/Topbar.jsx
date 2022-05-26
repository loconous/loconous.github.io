import "./topbar.scss"
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active ")}>
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
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                  <span className="line1"></span>
                  <span className="line2"></span>
                  <span className="line3"></span>
              </div>
           </div>
         </div>
    </div>
  )
}
