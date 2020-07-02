import React from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";

const ContentTypes = ({ type, content }) => {
  switch (type) {
    case "text":
      return <div className="contentMargin">{content}</div>;
    case "list":
      return (
        <ul className="contentMargin">
          {content.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      );
    // case "img":
    //     return (
    //         <div>{content}</div>
    //     )
    case "profile":
      return (
        <div>
          <img src={content.src} alt={content.alt} />
          <h3>{content.name}</h3>
          <ul>
            {content.titles.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      );
    default:
      return JSON.stringify(content);
  }
};

const ContentBlock = ({ title, bgColor, contentBlocks }) => {
  const backgroundClass = bgColor
    ? "contentPadding purpleBG"
    : "contentPadding";
  const titleClass = bgColor ? "title" : "darktitle";
  return (
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
        {contentBlocks.map((item) => (
          <ContentTypes {...item} />
        ))}
      </Grid>
    </Grid>
  );
};

export default ContentBlock;
