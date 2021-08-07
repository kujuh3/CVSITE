import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import {Fade, Zoom} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: "25px",
    textAlign: 'center',
    color: "white",
    backgroundColor: "#242128a8",
    minHeight: "333.967px",
    minWidth: "300px"
  },
  largepic: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    marginBottom: "10px",
    margin: "auto"
  },
  infotext: {
    color: "white",
    padding: "0px",
    minWidth: "300px",
    minHeight: "333.967px",
    maxHeight: "333.967px",
    textAlign: "center",
    backgroundColor: "#242128a8",
    overflowY: "scroll",
    transition: "width 0.6s"
    },
  infotitle:{
    textAlign: "left",
    padding: "5px",
    paddingTop: "10px",
    textDecoration: "underline",
    color: "#fd8e00"
  },
  infotextcontent:{
    textAlign: "left",
    padding: "3px",
    paddingTop: "10px",
    fontSize: "17px",
    letterSpacing: "0px"
  },
  progressinfo:{
    textAlign: "left",
    padding: "3px",
    paddingTop: "10px",
    fontSize: "17px",
    letterSpacing: "0px",
    marginLeft: "5px",
    fontWeight: "bold"
  },
  margindiv:{
      marginTop: "10px"
  }
}));

function About() {
  const classes = useStyles();
  const [text, setText] = useState({
      text1: (false),
      text2: (false),
      text3: (false),
      text4: (false)
  });

  return (
    <section id="about">
    <Container >
    <Typography id="aboutheader" variant="h3">About</Typography>
    <Divider/>
    <Grid className={classes.margindiv} container spacing={3}>
        <Grid item xs={3} onMouseEnter={() => setText({...text, text1:true})}
            onMouseLeave={() => setText({...text, text1:false})}>
            {text.text1
            ? <>
                <Paper id="infotext1" className={classes.infotext}>
                <Zoom timeout={500} in={text.text1}>
                <Typography variant="h5" className={classes.infotitle}>Who?</Typography>
                </Zoom>
                <Zoom timeout={550} in={text.text1}>
                <Typography variant="h6" className={classes.infotextcontent}>I'm a 25 year old student from Seinäjoki. Everything computer related has always been close at heart, but currently I'm looking to fulfill my yearn for working as a developer.</Typography>
                </Zoom>
                <Zoom timeout={600} in={text.text1}>
                <Typography variant="h5" className={classes.infotitle}>Code experience</Typography>
                </Zoom>
                <Zoom timeout={650} in={text.text1}>
                <Typography variant="h6" className={classes.infotextcontent}>My coding experience is mainly focused towards front-end developing. Including most experience with <mark>React</mark>, <mark>JavaScript</mark> and <mark>Node</mark>. This naturally includes working with <mark>Javascript</mark>, <mark>HTML</mark> and <mark>CSS</mark>.</Typography>
                </Zoom>
                <Zoom timeout={700} in={text.text1}>
                <Typography variant="h5" className={classes.infotitle}>Goals</Typography>
                </Zoom>
                <Zoom timeout={750} in={text.text1}>
                <Typography variant="h6" className={classes.infotextcontent}>As a junior developer my goals are set accordingly.</Typography>
                </Zoom>
                <Zoom timeout={800} in={text.text1}>
                <Typography variant="h6" className={classes.infotextcontent}>For now those goals include starting out as a front-end developer, progressing towards a fullstack developer.</Typography>
                </Zoom>
                </Paper>
              </>
            : <>
              <Paper id="infotext11" className={classes.paper}>
              <Fade in={!text.text1}>
              <Avatar className={classes.largepic} alt="Kujala" src="./files/profilepic.jpg" />
              </Fade>
              <Fade in={!text.text1}>
              <Typography id="thisme" variant="h4">This is me</Typography>
              </Fade>
              </Paper>
              </>
            }
        </Grid>
        <Grid item xs={3} onMouseEnter={() => setText({...text, text2:true})}
          onMouseLeave={() => setText({...text, text2:false})}>
            {text.text2
            ? <>
              <Paper className={classes.infotext}>
                <Zoom in={text.text2}>
                <Typography variant="h5" className={classes.infotitle}>Overall experience</Typography>
                </Zoom>
                <Zoom in={text.text2}>
                <Typography variant="h6" className={classes.infotextcontent}>Total sum of coding experience relative to my knowledge</Typography>
                </Zoom>
                <Zoom timeout={500} in={text.text2}>
                <Typography variant="h6" className={classes.progressinfo}>ReactJS<Divider light={true}/></Typography>
                </Zoom>
                <Zoom timeout={500} in={text.text2}>
                  <LinearProgress valueBuffer={100} variant="buffer" value={100}/>
                </Zoom>
                <Zoom timeout={550} in={text.text2}>
                <Typography variant="h6" className={classes.progressinfo}>HTML<Divider light={true}/></Typography>
                </Zoom>
                <Zoom timeout={550} in={text.text2}>
                  <LinearProgress valueBuffer={100} variant="buffer" value={100}/>
                </Zoom>
                <Zoom timeout={600} in={text.text2}>
                <Typography variant="h6" className={classes.progressinfo}>CSS<Divider light={true}/></Typography>
                </Zoom>
                <Zoom timeout={600} in={text.text2}>
                  <LinearProgress valueBuffer={100} variant="buffer" value={90}/>
                </Zoom>
                <Zoom timeout={650} in={text.text2}>
                <Typography variant="h6" className={classes.progressinfo}>JavaScript<Divider light={true}/></Typography>
                </Zoom>
                <Zoom timeout={650} in={text.text2}>
                  <LinearProgress valueBuffer={100} variant="buffer" value={90}/>
                </Zoom>
                <Zoom timeout={700} in={text.text2}>
                <Typography variant="h6" className={classes.progressinfo}>PHP<Divider light={true}/></Typography>
                </Zoom>
                <Zoom timeout={700} in={text.text2}>
                  <LinearProgress valueBuffer={100} variant="buffer" value={70}/>
                </Zoom>
                <Zoom timeout={750} in={text.text2}>
                <Typography variant="h6" className={classes.progressinfo}>NodeJS<Divider light={true}/></Typography>
                </Zoom>
                <Zoom timeout={750} in={text.text2}>
                  <LinearProgress valueBuffer={100} variant="buffer" value={70}/>
                </Zoom>
                <Zoom timeout={800} in={text.text2}>
                <Typography variant="h6" className={classes.progressinfo}>Express<Divider light={true}/></Typography>
                </Zoom>
                <Zoom timeout={800} in={text.text2}>
                  <LinearProgress valueBuffer={100} variant="buffer" value={70}/>
                </Zoom>
                <Zoom timeout={850} in={text.text2}>
                <Typography variant="h6" className={classes.progressinfo}>mySQL<Divider light={true}/></Typography>
                </Zoom>
                <Zoom timeout={850} in={text.text2}>
                  <LinearProgress valueBuffer={100} variant="buffer" value={50}/>
                </Zoom>
                <Zoom timeout={900} in={text.text2}>
                <Typography variant="h6" className={classes.progressinfo}>jQuery<Divider light={true}/></Typography>
                </Zoom>
                <Zoom timeout={900} in={text.text2}>
                  <LinearProgress valueBuffer={100} variant="buffer" value={50}/>
                </Zoom>
                <Zoom timeout={950} in={text.text2}>
                <Typography variant="h6" className={classes.progressinfo}>Python<Divider light={true}/></Typography>
                </Zoom>
                <Zoom timeout={950} in={text.text2}>
                  <LinearProgress valueBuffer={100} variant="buffer" value={30}/>
                </Zoom>
              </Paper>
            </>
            : <>
              <Paper  id="infotext11" className={classes.paper}>
              <Fade in={!text.text2}>
              <Avatar className={classes.largepic} alt="Kujala" src="./files/react.png" />
              </Fade>
              <Fade in={!text.text2}>
              <Typography id="thisme" variant="h4">Experience</Typography>
              </Fade>
              </Paper>
              </>
            }
        </Grid>
        <Grid item xs={3} onMouseEnter={() => setText({...text, text3:true})}
                onMouseLeave={() => setText({...text, text3:false})}>
            {text.text3
            ? <>
              <Paper id="infotext1" className={classes.infotext}>
                <Zoom timeout={400} in={text.text3}>
                <Typography variant="h5" className={classes.infotitle}>Current education</Typography>
                </Zoom>
                <Zoom timeout={450} in={text.text3}>
                <Typography variant="h6" className={classes.infotextcontent}>3rd year student at <mark>South-Eastern Finland University of Applied Sciences, Xamk - Business Information Technology</mark></Typography>
                </Zoom>
                <Zoom timeout={500} in={text.text3}>
                <Typography variant="h6" className={classes.infotextcontent}>Focusing my studies mainly towards web-development and programming overall.</Typography>
                </Zoom>
                <Zoom timeout={550} in={text.text3}>
                <Typography variant="h5" className={classes.infotitle}>Prior education</Typography>
                </Zoom>
                <Zoom timeout={600} in={text.text3}>
                <Typography variant="h6" className={classes.infotextcontent}>2012-2015 - <mark>Vocational Qualification in Business Information Technology</mark> at SEDU, Seinäjoki</Typography>
                </Zoom>
                <Zoom timeout={600} in={text.text3}>
                <Typography variant="h6" className={classes.infotextcontent}>2012-2014 - <mark>High school of Seinäjoki</mark>  Dual qualification (dropped)</Typography>
                </Zoom>
              </Paper>
              </>
            : <>
              <Paper id="infotext11" className={classes.paper}>
              <Fade in={!text.text3}>
              <Avatar id="education" className={classes.largepic} alt="Education" src="./files/xamklogo.png" />
              </Fade>
              <Fade in={!text.text3}>
              <Typography id="thisme" variant="h4">Education</Typography>
              </Fade>
              </Paper> 
            </>
            }
        </Grid>
        <Grid item xs={3}>
            <Paper id="infotext11" className={classes.paper}>
              <a href="https://www.linkedin.com/in/kujala1/" ><Avatar id="education" className={classes.largepic} alt="Kujala" src="./files/linkedin.png" /></a>
              <Typography id="thisme" style={{marginTop:"50px"}} variant="h4">My LinkedIn</Typography>
              </Paper>
        </Grid>
      </Grid>
    </Container>
 </section>
  );
}

export default About;
