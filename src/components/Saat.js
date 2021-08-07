import React from 'react';
import {makeStyles} from "@material-ui/styles";
import { useState} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {TextField, Button, Typography} from '@material-ui/core';



//varoitusta varten tietojen haku
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props}/>;
}


const useStyles = makeStyles({
    chip: {
        backgroundColor: "#fd8e00",
        height: "55px",
        marginTop: "10px"
      },
    teksti: {
        display: "inline",
        marginLeft: "10px",
        color: "#fd8e00",
    },
      boot: {
        '& > *': {
          width: '25ch',
          overFlow: "hidden",
          marginTop: "10px"
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
});

//funktiolla props jonka kautta haun teko
function Saat(props){
    const [haettava, setHaettava] = useState("seinajoki");
    const tyylit = useStyles();
    const [hakeminen, setHakeminen] = useState("seinajoki");
    //ääkkösien määrääminen vertausta varten
    const [umlauts, setUmlauts] = useState(
        {
        "ä" : "a",
        "ö" : "o",
        "å" : "o"
        }
    );
    function haku(){
        let str = haettava;
        //vanhan tyylin ääkkösmuutos - lähes copypaste vanhasta tehtävästä
        str = str.replace(/ä|ö|å/gi, function(matched){
          return umlauts[matched];
        })                           
        setHakeminen(str)
        haeTiedot(str);
    }

//datalle array
const [data, setData] = useState({
                                    tiedot2 : [],
                                    nimi : [],
                                    id : [],
                                    virhe : null,
                                    tiedotHaettu : false
                                });

    //virheilmoitusta varten muuttujat + funktio
    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    };

//haetaan tiedot ja katsotaan virhe
const haeTiedot = async (hakua) => {

    const yhteys = await fetch(`https://so3server.herokuapp.com/saatilanne/${hakua}`);
    const tiedot = await yhteys.json();

        //tähän meni ***** kauan löytää syy - catch ei tunnista 404 koodeja, sillä periaaatteessa
        //ne eivät ole yhteysvirheitä
        //joten verrataan iffillä jos tullut 404  ja jos ei niin jatketaan
        if (tiedot.cod == 404) {
        setData({
            ...data,
            virhe : `Virhe: etsimääsi kaupunkia ei löytynyt.`,
            tiedotHaettu : false
            });
            console.log(data)
        }
        else    {
            setData({
                    ...data,
                    tiedot2 : [tiedot.main],
                    nimi : tiedot.name,
                    id : tiedot.id,
                    virhe : null,
                    tiedotHaettu : true
                    });
        }
    console.log(data.tiedot2)
}   //useeffectillä päivitys ja seurataan hakusyötön muuttujaa

    return (
    <>
    <TextField 
            variant="outlined"
            placeholder="Ex.. Helsinki" 
            className={tyylit.boot}
            onChange={(e) => {setHaettava(e.target.value)}}
        />
        <Button variant="contained" className={tyylit.chip} onClick={ () => {haku()}}
            >OK</Button>
    {(data.virhe)
    ?    <><Snackbar open={open} autoHideDuration={9000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                Virhe: etsimääsi kaupunkia ei löytynyt!
                </Alert>
            </Snackbar>
      </>

    :   <>
    {data.tiedot2.map((tieto) => {
    return ( <>              
            <Typography className={tyylit.teksti} variant="h4">Temperature: {tieto.temp}°C</Typography>       
            </> 
            );
    })}</>
    }
    </>
    );
}

export default Saat;