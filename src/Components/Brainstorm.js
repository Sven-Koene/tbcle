import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';


class Brainstorm extends React.Component{
    render(){
        return(
            <Grid className="contentPadding">
                <Grid className="darktitle">
                    <div>
                        <h3 className="center">Brainstorm</h3>
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


export default Brainstorm;