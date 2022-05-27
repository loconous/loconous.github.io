import "./intro.scss"
import { init } from 'ityped'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Intro() {
  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/me.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hola! Hello! I'm </h2>
            <h1>Luis A. González Villalobos</h1>
            <h3>Computer Engineer <span></span></h3>
          </div>
          <a href="#portfolio">
            <div className="itemContainer">
              <ArrowDropDownIcon className="icon"/>
            </div>
          </a>
        </div>
    </div>
  )
}
