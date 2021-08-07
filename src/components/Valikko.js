import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import '../css/menu.css';

function Valikko() {

    const [open, setOpen] = useState(null);

    const suljeMenu = () => {
        setOpen(null);
    }

  return (
        <AppBar position="sticky" color="default">
            <Toolbar>

            <nav class="navMenu" id="nav-wrap">
                <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Info</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#skills">Skills</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
                <div class="dot"></div>
                </ul>
            </nav>
                <IconButton  color="primary" size="medium" edge="start" onClick={ (e) => { setOpen(e.currentTarget) }} >
                    <MenuIcon id="menuicon" style={{color: '#ffc376'}} />
                </IconButton>
                <Menu open={Boolean(open)} anchorEl={open} onClose={suljeMenu}>
                    <MenuItem 
                        onClick={ () => { 
                            suljeMenu();
                            }}
                    ><a className="smoothscroll" href="#home">Info</a></MenuItem>
                    <MenuItem 
                        onClick={ () => { 
                            suljeMenu();
                            }}
                    ><a className="smoothscroll" href="#about">About</a></MenuItem>
                    <MenuItem 
                        onClick={ () => { 
                            suljeMenu();
                            }}
                    ><a className="smoothscroll" href="#skills">Skills</a></MenuItem>
                    <MenuItem 
                        onClick={ () => { 
                            suljeMenu();
                            }}
                    ><a className="smoothscroll" href="#contact">Contact</a></MenuItem>
                 </Menu>
            </Toolbar>
        </AppBar>
  );
}

export default Valikko;
