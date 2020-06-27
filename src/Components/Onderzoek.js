import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';

import onderzoek from "../Images/onderzoekIcon.png"

class Onderzoek extends React.Component{
    render(){
        return(
            <Grid className="purpleBG contentPadding">
                <Grid className="title">
                    <div>
                        <h3 className="center">Onderzoek</h3>
                    </div>
                </Grid>
                <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className="contentPadding"
                >
                    <div className="center">
                        <p>TBCLE</p>
                        <p>
                            <li>Presents</li>
                        </p>
                        <p>ScanNu</p>
                    </div>
                    <div>
                        <img src={onderzoek} alt="onderzoekIcon"></img>
                    </div>
                </Grid>
            </Grid>
        )
    }
}


export default Onderzoek;