import React from "react";
import '../App.css';
import Grid from '@material-ui/core/Grid';

// interface ContentBlockProps {
//     bgColor: boolean 
//     content: {
//         id: Number
//         title: String
//         idk: String
//     }
// }

const ContentBlock = ({bgColor, content}) => {
    return(
        <Grid className="contentPadding">
            <Grid className="darktitle">
                <div>
                    <h3 className="center">{content.title}</h3>
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


export default ContentBlock;