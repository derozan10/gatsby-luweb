import React from 'react';
import { Grid, Cell } from 'styled-css-grid';
import PostCard from './PostCard';

const PostCardList = props => {
  const { posts } = props;
  return (
    <nav>
      <Grid columns="repeat(auto-fit,minmax(260px,1fr))" gap="30px" alignContent="stretch">
        {posts.map(post => (
          <Cell key={post.fields.slug}>
            <PostCard post={post} {...props} />
          </Cell>
        ))}
      </Grid>
    </nav>
  );
};

export default PostCardList;
