export default (reddit, sortValue) => {
  reddit.sort((post1, post2) => {
    switch (sortValue) {
      case 'new':
        return post1.data.created_utc < post2.data.created_utc ? -1 : 1;
      case 'top':
        return post1.data.score > post2.data.score ? -1 : 1;
      case 'controversial':
        return post1.data.score < post2.data.score &&
          post1.data.num_comments > post2.data.num_comments
          ? -1
          : 1;
      case 'hot':
        return post1.data.num_comments > post2.data.num_comments ? -1 : 1;
    }
  });
  return reddit;
};
