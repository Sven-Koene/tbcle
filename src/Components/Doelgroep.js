import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';


class Doelgroep extends React.Component{
    render(){
        return(
            <Grid className="purpleBG contentPadding">
                <Grid className="title">
                    <div>
                        <h3 className="center">Doelgroep</h3>
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
                </Grid>
            </Grid>
        )
    }
}


export default Doelgroep;