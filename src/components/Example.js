import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: "25px",
        textAlign: 'center !important',
        color: "white",
        backgroundColor: "#242128a8",
        minHeight: "100px",
        minWidth: "300px",
        marginTop: "10px"
      },
    youwrote: {
        textAlign: "center",
        color: "#ffa93a",
    }
  }));

function Example(props) {

    const prop = props.match.params.id;
    const classes = useStyles();

  return (
    <section id="contact">
    <Container>
    <Divider/>
    <Paper className={classes.paper} elevation={3}>
    <Typography className={classes.youwrote} variant="h3">You wrote: </Typography><Typography variant="h3">{prop}</Typography>
    
    </Paper>
    </Container>
</section>
  );
}

export default Example;
