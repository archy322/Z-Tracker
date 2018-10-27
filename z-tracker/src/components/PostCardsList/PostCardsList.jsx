import React from 'react';
import PostCard from "../PostCard/PostCard";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid/Grid";

function PostCardsList({postCards, classes}) {
  return (
      <React.Fragment>
        <Grid container spacing={40} className={classNames(classes.layout, classes.cardGrid)}>
          {postCards.map(card => (
              <PostCard classes={classes} key={card.id} card={card}/>
          ))}
        </Grid>
      </React.Fragment>
  );
}

export default PostCardsList;