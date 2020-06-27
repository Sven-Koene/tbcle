import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';

import phoneApp from "../Images/phoneApp.png"

class Header extends React.Component{
    render(){
        return(
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className="fullHeight"
            >
                <div className="center">
                    <h1>TBCLE</h1>
                    <p>Presents</p>
                    <h2>ScanNu</h2>
                </div>
                <div>
                    <img src={phoneApp} alt="phoneApp"></img>
                </div>
            </Grid>
        )
    }
}


export default Header;

