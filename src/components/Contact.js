import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '28ch',
        overFlow: "hidden",
        position:"relative",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffa93a"
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
    },
    viesti:{
        width: '100%',
        borderColor:'#ffa93a',
        maxWidth: "500px"
    },
    content:{
        marginTop: "10px"
    },
    paper: {
        padding: "25px",
        textAlign: 'center',
        color: "white",
        backgroundColor: "#242128a8",
        minHeight: "450px",
        minWidth: "250px",
        marginTop: "10px",
        marginLeft: "auto",
        marginRight: "auto"
      },
    contacttext:{
        marginLeft:"10px",
        color: "#fd8e00",
        fontStyle: "italic",
    },
    contactform:{
        textAlign: "center",
        marginTop:"40px"
    },
    button:{
        margin: theme.spacing(1),
        textAlign: "center",
        backgroundColor:"#fd8e00"
    }
  }));

function Contact() {
    const classes = useStyles();
    
    function submit(e){
        e.preventDefault();

        emailjs.sendForm('service_olmxr94', 'template_e78h0pc', e.target, 'user_hGVI2KSiWQaeHuOQuUpbU')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }

  return (
    <section id="contact">
      <Container>
        <Typography id="contactheader" variant="h3">Contact</Typography>
        <Divider/>
        <Paper className={classes.paper} elevation={3}>
            <Grid className={classes.content} spacing={3}>
            <Typography className={classes.contacttext} variant="h5">You can contact me through form below</Typography>
                <div className={classes.contactform}>
                <form className={classes.root} noValidate autoComplete="off" onSubmit={submit}>
                <TextField name="user_name" id="nimi" label="Name" variant="outlined"/>
                <TextField name="user_email" id="sposti" label="Email" variant="outlined"/>
                <td/>
                <TextField name="message" className={classes.viesti} multiline rows={8} id="viesti" label="Message" variant="outlined"/>
                <td/>
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                    endIcon={<SendIcon></SendIcon>}
                >
                    Send
                </Button>
                </form>
                </div>
            </Grid>
            </Paper>
            </Container>
 </section>
  );
}

export default Contact;
