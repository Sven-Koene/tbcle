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

const ContentBlock = ({bgColor, title}) => {
    const backgroundClass = bgColor ? "contentPadding purpleBG" : "contentPadding"
    const titleClass = bgColor ? "title" : "darktitle"
    return(
        <Grid className={backgroundClass}>
            <Grid className={titleClass}>
                <div>
                    <h3 className="center">{title}</h3>
                </div>
            </Grid>
            <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className="contentPadding"
            >
                {
                    // The following part depends on how you arrange your content 
                    // So, let's figure that out first
                }
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