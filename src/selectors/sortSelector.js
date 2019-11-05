export default (reddit, sortValue) => {
  reddit.sort((post1, post2) => {
    switch (sortValue) {
      case 'new':
        return post1.data.created_utc < post2.data.created_utc;
      case 'top':
        return post1.data.score > post2.data.score;
      case 'controversial':
        return (
          post1.data.score < post2.data.score &&
          post1.data.num_comments > post2.data.num_comments
        );
      case 'hot':
        return post1.data.num_comments > post2.data.num_comments;
    }
  });
  return reddit;
};
