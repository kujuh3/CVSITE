import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import Chip from '@material-ui/core/Chip';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Saat from "./Saat";
import { IconButton, Menu } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "25px",
        textAlign: 'left',
        color: "white",
        backgroundColor: "#242128a8",
        minHeight: "450px",
        minWidth: "300px",
        maxHeight: "600px",
        marginTop: "10px",
        flexGrow: 1,
        display: 'flex',
      },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        textAlign:"left !important"
      },
    iconstyle: {
        width: "30px",
    },
    content: {
        overflowY: "auto",
        width: "100%"
    },
    infotitle:{
        textAlign: "left",
        paddingTop: "50px",
        textDecoration: "underline",
        color: "#fd8e00"
      },
    infotitle1:{
        textAlign: "left",
        paddingTop: "10px",
        textDecoration: "underline",
        color: "#fd8e00"
      },
    imagelist: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: "#fff",
        backgroundColor: "#fd8e00",
        borderRadius: "2px",
        width: "142px",
        paddingLeft: "4px"
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'inherit',
        height:"180px"
      },
      exampletext: {
          paddingTop: "50px"
      },
      boot: {
        '& > *': {
          width: '25ch',
          overFlow: "hidden"
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          color: "#d4d4d4"
        },
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          borderColor: "#d4d4d4"
        },
       "& .MuiOutlinedInput-input": {
        color: "#ffa93a"
      },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "white"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
          color: "#ffa93a"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
          color: "#ffa93a"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#ffa93a"
        },
      },
      link : {
          color: "#ffa93a",
      },
      chip: {
        margin: theme.spacing(0.5),
        backgroundColor: "#fd8e00"
      },
      html: {
          display: "contents"
      }
  }));

function Skills() {
    
    const [open, setOpen] = useState(null);

    const suljeMenu = () => {
        setOpen(null);
    }

    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [text, setText] = useState({
        tieto : "Example"
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function vaihda(e){
        setText({tieto : e});
    }

  return (
    <section id="skills">
    <Container>
        <Typography id="contactheader" variant="h3">Skills</Typography>
        <Divider/>
        <Paper className={classes.paper} elevation={3}>
        <IconButton color="primary" size="medium" edge="start" onClick={ (e) => { setOpen(e.currentTarget) }} >
                    <MenuIcon id="skillsmenu" style={{color: '#ffc376'}} />
                </IconButton>
                <Menu open={Boolean(open)} anchorEl={open} onClose={suljeMenu}>
                <Tabs
                id="mobileskills"
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical"
                className={classes.tabs}>
        <Tab label="React" {...a11yProps(0)} />
        <Tab label="HTML" {...a11yProps(1)} />
        <Tab label="CSS" {...a11yProps(2)} />
        <Tab label="JavaScript" {...a11yProps(3)} />
        <Tab label="PHP" {...a11yProps(4)} />
        <Tab label="NodeJS" {...a11yProps(5)} />
        <Tab label="ExpressJS" {...a11yProps(6)} />
        <Tab label="mySQL" {...a11yProps(7)} />
        <Tab label="jQuery" {...a11yProps(8)} />
        <Tab label="Python" {...a11yProps(9)} />
      </Tabs>
    </Menu>
        <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical"
        className={classes.tabs}
      >
          
        <Tab icon={<i className={classes.iconstyle} class="devicon-react-original"></i>} label="React" {...a11yProps(0)} />
        <Tab icon={<i className={classes.iconstyle} class="devicon-html5-plain"></i>} label="HTML" {...a11yProps(1)} />
        <Tab icon={<i className={classes.iconstyle} class="devicon-css3-plain"></i>} label="CSS" {...a11yProps(2)} />
        <Tab icon={<i className={classes.iconstyle} class="devicon-javascript-plain"></i>} label="JavaScript" {...a11yProps(3)} />
        <Tab icon={<i className={classes.iconstyle} class="devicon-php-plain"></i>} label="PHP" {...a11yProps(4)} />
        <Tab icon={<i className={classes.iconstyle} class="devicon-nodejs-plain"></i>} label="NodeJS" {...a11yProps(5)} />
        <Tab icon={<i className={classes.iconstyle} class="devicon-express-original"></i>} label="ExpressJS" {...a11yProps(6)} />
        <Tab icon={<i className={classes.iconstyle} class="devicon-mysql-plain"></i>} label="mySQL" {...a11yProps(7)} />
        <Tab icon={<i className={classes.iconstyle} class="devicon-jquery-plain"></i>} label="jQuery" {...a11yProps(8)} />
        <Tab icon={<i className={classes.iconstyle} class="devicon-python-plain"></i>} label="Python" {...a11yProps(9)} />

      </Tabs>
        <TabPanel className={classes.content} value={value} index={0}>
            <Typography variant="h5" className={classes.infotitle1}>HTML + CSS</Typography>
            <Typography>Experience in handling HTML and CSS withing React.</Typography><td/>
            <Typography>This field of experience includes working with:</Typography>
            <div className={classes.root}>
            <ImageList className={classes.imagelist} cols={2}>
                <ImageListItem>
                    <img alt="cs1" src="../files/skills/css1.png"/>
                    <ImageListItemBar 
                        title="MakeStyles"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        />
                </ImageListItem>
                <ImageListItem>
                    <img alt="cs2" src="../files/skills/css2.png"/>
                    <ImageListItemBar 
                        title="ClassNames"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        />
                </ImageListItem>
                <ImageListItem>
                    <img alt="cs3" src="../files/skills/css3.png"/>
                    <ImageListItemBar 
                        title="Regular stylesheet"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        />
                </ImageListItem>
            </ImageList>
            </div>
            <div style={{marginTop:"40px"}}>
                <Typography variant="h5" className={classes.infotitle}>Components, props and routes</Typography>
                <Typography >Experience in working with components, routes and props</Typography><td/>
                <Typography >This would include working with components, props and passing said props with routes for unique URLs and renders.</Typography><td/>
            <div className={classes.exampletext}>
                <Typography variant="h6">As an example your input here: <TextField id="exampleinput" className={classes.boot} onChange={ (e) => {vaihda(e.target.value)}} label="Example" variant="outlined"/> will be rendered</Typography><Typography className={classes.link} variant="h6" component={Link} to={`/example/${text.tieto}`} target="_blank">here</Typography>
            </div>
            </div>
            <Typography variant="h5" className={classes.infotitle}>Material-UI</Typography>
            <Typography >This site would work as an example.</Typography><td/>
            <Typography >Most data displays and texts are done using Material-UIs components and manipulating those components styles, and adding functionalities to them.</Typography>
            
            <Typography variant="h5" className={classes.infotitle}>Conditional renders</Typography>
            <Typography >As an example, the cards in "About" section are done using Reacts conditional rendering.</Typography><td/>
            <Typography >Each card has a true or false variable inside an array, and each cards variable is changed on "onMouseOver" and "onMouseLeave".</Typography>

            <Typography variant="h5" className={classes.infotitle}>API's</Typography>
            <Typography >Experience with using API's for data display.</Typography><td/>
            <Typography >Fetching data through API address and displaying said data through mapping.</Typography><td/>
            <Typography >Including fetching different datasets from API's based on user input or other possible parameters.</Typography>
            <Typography variant="h6">As an example, here's an input field which fetches temperature of any finnish city through a weather API. This component includes umlauts translater, so that characters such as "ä,ö,å" get filtered correctly.</Typography>
            <Saat/>

            <Typography variant="h5" className={classes.infotitle}>Backend and middleware</Typography>
            <Typography >Dabbling with backend and middleware.</Typography><td/>
            <Typography >I've tested working with MERN stack with 2 projects. Which I would say I'm not in any shape or form really familiar with.</Typography><td/>
            <Typography >These projects have included working with:</Typography>
            <List>
                <ListItem>
                  <ListItemText
                    primary="Login and register validation"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Routes"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="MongoDB"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Axios"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Express"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Node"
                  />
                </ListItem>
            </List>
        </TabPanel>

        <TabPanel className={classes.content} value={value} index={1}>

            <Typography variant="h5" className={classes.infotitle1}>HTML</Typography>
            <Typography >Obvious experience with HTML, considering it's used with everything web-dev related.</Typography><td/>
            <Typography >Experience with HTML would include things such as:</Typography><td/>
            <div className={classes.html}>
            <List>
                <ListItem className={classes.html}>
                <Chip
                   label="CSS/Styles"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Images"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Tables"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Lists"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Elements"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Iframes"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="JavaScript"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Filepaths"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Layouts"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Responsivity"
                   className={classes.chip}
                 />
                 <ListItem className={classes.html}>
                <Chip
                   label="Charsets"
                   className={classes.chip}
                 />
                </ListItem>
                </ListItem>
            </List>
            </div>
        </TabPanel>

        <TabPanel className={classes.content} value={value} index={2}>
            
            <Typography variant="h5" className={classes.infotitle1}>Layouts</Typography>
            <Typography >Experience in working with common layout techniques</Typography><td/>
            <Typography >Such as grids, margins and paddings in general.</Typography><td/>

            <Typography variant="h5" className={classes.infotitle}>Animations</Typography>
            <Typography >This sites animations used in header title and each subsections title and cards work as an example.</Typography><td/>
            <Typography >Creating keyframes, and overall understanding of how animations are constructed withing CSS.</Typography>
            
            <Typography variant="h5" className={classes.infotitle}>Responsivity</Typography>
            <Typography >Experience with making responsive sites and or apps.</Typography><td/>
            <Typography >Techniques such as:</Typography><td/>
            <List>
            <ListItem className={classes.html}>
                <Chip
                   label="Breakpoints"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Media queries"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Bootstrap"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Display properties"
                   className={classes.chip}
                 />
                </ListItem>
            </List>
            <Typography variant="h5" className={classes.infotitle}>Browser support</Typography>
            <Typography >Experience in working with different browser supports.</Typography><td/>
            <Typography >Managing CSS techniques based on browsers. This includes familiarity with webkit.</Typography><td/>
        </TabPanel>

        <TabPanel className={classes.content} value={value} index={3}>
            <Typography variant="h5" className={classes.infotitle1}>JavaScript</Typography>
            <Typography >Experience with JavaScript overall.</Typography><td/>
            <Typography >Considering JavaScript is widely used in anything web-development related, this language has been made very familiar to me.</Typography><td/>
            <Typography >As an example, React's JS is being used in this site for every functionality.</Typography><td/>

            <Typography variant="h5" className={classes.infotitle}>Techniques</Typography>
            <Typography >Techniques I'm familiar with would include things such as:</Typography><td/>
            <List>
            <ListItem className={classes.html}>
                <Chip
                   label="Arrays"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Functions and parameters"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Error catching"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="DOM"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Conditionalities"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Object Literals"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="JSON handling"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Loops"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Object keys"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Objects"
                   className={classes.chip}
                 />
                </ListItem>
            </List>
 
            
        </TabPanel>
        <TabPanel className={classes.content} value={value} index={4}>
            <Typography variant="h5" className={classes.infotitle1}>Posts</Typography>
            <Typography >Experience in working with PHPs POST methods</Typography><td/>
            <Typography >Techniques such as renders based on user inputs.</Typography><td/>
            <Typography >Includes conditional element processing, such as calculations done only from certain inputs.</Typography><td/>

            <Typography variant="h5" className={classes.infotitle}>Loops, conditionals, keys and arrays.</Typography>
            <Typography >Experience with data handling with PHP.</Typography><td/>
            <Typography >Techniques such as foreach loops, indexes, if statements.</Typography>
            <Typography >For example printing HTML tables using foreach loops with arrays.</Typography>
            
            <Typography variant="h5" className={classes.infotitle}>Functions, parameters and includes</Typography>
            <Typography >Experience with including PHP functions from files and using said functions with user based parameters.</Typography><td/>
            
            <Typography variant="h5" className={classes.infotitle}>Classes/Objects</Typography>
            <Typography >Experience in classes and objects with PHP.</Typography><td/>
            <Typography >Such as including a class from other file(s), setting said class to an object and using the object for functionalities.</Typography><td/>

            <Typography variant="h5" className={classes.infotitle}>Databases and sessions</Typography>
            <Typography >Experience with database handling along with sessions.</Typography><td/>
            <Typography >Such as data importing/fetching/deleting/encrypting. Example would be a site where exists a register, login and dashboard page. In said site would be account based information rendered on page.</Typography><td/>


        </TabPanel>
        <TabPanel className={classes.content} value={value} index={5}>
            <Typography variant="h5" className={classes.infotitle1}>Platform</Typography>
            <Typography >Familiarity using Nodes platform overall.</Typography><td/>
            <Typography >For example working with Nodes command line and commands.</Typography><td/>

            <Typography variant="h5" className={classes.infotitle}>Server</Typography>
            <Typography >Working with Nodes server functionalities.</Typography><td/>
            <Typography >This would include things such as:</Typography>
            
            <List>
            <ListItem className={classes.html}>
                <Chip
                   label="POSTs"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="GETs"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Functions"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Types/Schemas"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Express"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="BodyParser"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Routes"
                   className={classes.chip}
                 />
                </ListItem>
            </List>
        </TabPanel>
        <TabPanel className={classes.content} value={value} index={6}>
                <Typography variant="h5" className={classes.infotitle1}>Express.js</Typography>
                <Typography >Mediocre experience in working with Express</Typography><td/>
                <Typography >Said experience would include techniques such as:</Typography><td/>
                <List>
            <ListItem className={classes.html}>
                <Chip
                   label="Routing"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Middleware"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="URL building"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Database"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Error handling"
                   className={classes.chip}
                 />
                </ListItem>
            </List>
        </TabPanel>

        <TabPanel className={classes.content} value={value} index={7}>
            <Typography variant="h5" className={classes.infotitle1}>Databases</Typography>
            <Typography >Experience in working with MySQL or databases in general.</Typography><td/>

            <Typography variant="h5" className={classes.infotitle}>Techniques</Typography>
            <Typography >Overall understanding of databases and techniques used in them.</Typography><td/>
            <Typography >These would include things such as:</Typography>
            <List>
            <ListItem className={classes.html}>
                <Chip
                   label="Users"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Roles"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Privileges"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Commands/Data manipulation"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Compares"
                   className={classes.chip}
                 />
                </ListItem>
            </List>

        </TabPanel>
        <TabPanel className={classes.content} value={value} index={8}>
            <Typography variant="h5" className={classes.infotitle1}>The usual</Typography>
            <Typography >Experience in working with jQuery and HTML.</Typography><td/>
            <Typography >For example manipulating HTML behaviors using jQuery functions.</Typography><td/>

            <Typography variant="h5" className={classes.infotitle}>Functions</Typography>
            <Typography >Experience in working with jQuery functions.</Typography><td/>
            <Typography >This would include things such as:</Typography>
            <List>
            <ListItem className={classes.html}>
                <Chip
                   label="Class adds"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Clicks"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Navigator"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Objects"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="Arrays"
                   className={classes.chip}
                 />
                </ListItem>
                <ListItem className={classes.html}>
                <Chip
                   label="JSON"
                   className={classes.chip}
                 />
                </ListItem>
            </List>
            <Typography variant="h5" className={classes.infotitle}>LocalStorage</Typography>
            <Typography >Experience in working with jQuery and local Storages</Typography><td/>
            <Typography >Saving and fetching data from localstorage for usage.</Typography>
            
        </TabPanel>
        <TabPanel className={classes.content} value={value} index={9}>
        <Typography variant="h5" className={classes.infotitle1}>Python</Typography>
            <Typography >Minimal experience with Python.</Typography><td/>
            <Typography >This experience is mostly limited to data handling using numpy or pandas.</Typography>

            <Typography variant="h5" className={classes.infotitle}>Numpy</Typography>
            <Typography >Experience with using Numpy for data handling and or calculations.</Typography><td/>
            <Typography >Most familiarity using jupyter platform.</Typography><td/>
            <div className={classes.root}>
            <ImageList className={classes.imagelist} cols={2}>
                <ImageListItem>
                    <img alt="py1" src="../files/skills/py1.png"/>
                    <ImageListItemBar 
                        title="Arrays"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        />
                </ImageListItem>
                <ImageListItem>
                    <img alt="py2" src="../files/skills/py2.png"/>
                    <ImageListItemBar 
                        title="Matrixes"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        />
                </ImageListItem>
                <ImageListItem>
                    <img alt="py3" src="../files/skills/py3.png"/>
                    <ImageListItemBar 
                        title="Vectors"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        />
                </ImageListItem>
            </ImageList>
            </div>
            <Typography variant="h5" className={classes.infotitle}>Pandas</Typography>
            <Typography >Experience with Pandas for data handling.</Typography><td/>
            <Typography >This includes methods such as:</Typography><td/>
            <div className={classes.root}>
            <ImageList className={classes.imagelist} cols={2}>
                <ImageListItem>
                    <img alt="py1.1" src="../files/skills/py1.1.png"/>
                    <ImageListItemBar 
                        title="Lists&plots"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        />
                </ImageListItem>
                <ImageListItem>
                    <img alt="py1.2" src="../files/skills/py1.2.png"/>
                    <ImageListItemBar 
                        title="Stemming"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        />
                </ImageListItem>
                <ImageListItem>
                    <img alt="py1.3" src="../files/skills/py1.3.png"/>
                    <ImageListItemBar 
                        title="Data manipulating"
                        classes={{
                            root: classes.titleBar,
                            title: classes.title,
                        }}
                        />
                </ImageListItem>
            </ImageList>
            </div>
        </TabPanel>
    </Paper>
    </Container>
 </section>
  );
}

export default Skills;
