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
          {content.map((item, i) => (
            <li key={`list-item-${i * Math.random()}`}>{item}</li>
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
          <img src={content.img.src} alt={content.img.alt} className="teamImg"/>
          <h3>{content.name}</h3>
          <ul>
            {content.titles.map((item, i) => (
              <li key={`list-item-${i * Math.random()}`}>{item}</li>
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
        justify="space-around"
        alignItems="center"
        className="contentPadding"
      >
        {contentBlocks.map((item, i) => (
          <ContentTypes key={`content-type-${i}`} {...item} />
        ))}
      </Grid>
    </Grid>
  );
};

export default ContentBlock;
