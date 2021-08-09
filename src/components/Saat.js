import React from 'react';
import {makeStyles} from "@material-ui/styles";
import { useState} from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import {TextField, Button, Typography} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from "axios";


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
    const [loading, setLoading] = useState(true);
    const [haettava, setHaettava] = useState("");
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
        setLoading(false);
        let str = haettava;
        //vanhan tyylin ääkkösmuutos - lähes copypaste vanhasta tehtävästä
        str = str.replace(/ä|ö|å/gi, function(matched){
          return umlauts[matched];
        })                           
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

    function onKeyDownHandler (e) {
      if (e.keyCode === 13) {
        haku()
      }
    };

//haetaan tiedot ja katsotaan virhe
const haeTiedot = async (hakua) => {
    try {
      const data1 = await axios
      .get(`https://so3server.herokuapp.com/saatilanne/${hakua}`)
      .then(res =>{
          console.log(res);
          setData({
            ...data,
            tiedot2 : [res.data.main],
            nimi : res.data.name,
            id : res.data.id,
            virhe : null,
            tiedotHaettu : true
            });
          if(res.data.cod==404){
            setData({
              ...data,
              virhe : true,
              tiedotHaettu : false
              });
          }
      });
      setLoading(true);

    } catch (e) {
      setLoading(true);
      setData({
        ...data,
        virhe : true,
        tiedotHaettu : false
        });
      console.log(e)
    }
  };
    
    return (
    <>
    <TextField 
            variant="outlined"
            placeholder="Ex.. Helsinki" 
            className={tyylit.boot}
            onChange={(e) => {setHaettava(e.target.value)}}
            onKeyDown={(e) => {onKeyDownHandler(e)}}
        />
        <Button variant="contained" className={tyylit.chip} onClick={ () => {haku()}}
            >OK</Button>
    {(data.virhe)
    ?    <><Snackbar open={open} autoHideDuration={9000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                Error: Couldn't find city!
                </Alert>
            </Snackbar>
      </>

    :   <></>}
    {(data.virhe)
    ?    <><Snackbar open={open} autoHideDuration={9000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                Error: Couldn't find city!
                </Alert>
            </Snackbar>
         </>

    : <>{(loading) 
      ? 
      <>{data.tiedot2.map((tieto) => {
      return ( <><td/>
              <Typography className={tyylit.teksti} variant="h4">{data.nimi}: {tieto.temp}°C</Typography>       
              </> 
              );
      })
      }</>
    : <><CircularProgress color="orange"/></>
    }
    </>
    }
    </>
    );
}

export default Saat;
