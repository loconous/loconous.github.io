import "./intro.scss";
import { init } from 'ityped';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useEffect, useRef } from 'react';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    //console.log(textRef);
    const options = {
    	strings: [
        'Security Professional',
        'Software Developer',
        'Embedded Systems Developer',
        'Researcher'
      ],
      showCursor: true,
      //typeSpeed: 50,
      backSpeed: 60,
    };

    init(textRef.current, options);

  }, []);

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
            <h3>Ingeniero en Computación / Computer Engineer</h3>
            <span ref={textRef}></span>
          </div>
          <a href="#work">
            <div className="itemContainer">
              <ArrowDropDownIcon className="icon"/>
            </div>
          </a>
        </div>
    </div>
  )
}
