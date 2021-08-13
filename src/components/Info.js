import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Divider from '@material-ui/core/Divider';

function Info() {


  return (
    <header id="home">
        <div className="row banner">
            <div className="banner-text">
            <h1 className="responsive-headline">Hey</h1>
            <div id="infotext">
            <Divider/>
            <h3>My name is <span>Juho</span></h3>
            <h3>I'm a <span>Full stack </span>web-developer</h3>
            <h3>Temporary <span>front-end</span> focus, and <span>improvement</span> in mind.</h3>
            <Divider/>
            </div>
            </div>
        </div>

    <p className="scrolldown">
        <a className="smoothscroll" href="#about"><KeyboardArrowDownIcon fontSize="inherit"/></a>
    </p>
    </header>
  );
}

export default Info;
