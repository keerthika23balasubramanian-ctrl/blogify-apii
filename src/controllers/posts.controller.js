// get all posts
const getAllPosts = (req, res) => {
  res.json({ message: "All posts fetched" });
};

// get post by id (ASSIGNMENT)
const getPostById = (req, res) => {
  const postId = req.params.postId;

  res.json({
    message: "Fetching data for post with ID: " + postId
  });
};

module.exports = {
  getAllPosts,
  getPostById
};