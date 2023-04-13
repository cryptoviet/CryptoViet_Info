function getListPost(blogs) {
  blogs.data.map((blog) => {
    return {
      categories: blog.attributes.category?.data.attributes.Name,
      title: blog.attributes.title,
      content: blog.attributes.content,
      description: blog.attributes.description,
      slug: blog.attributes.slug,
      image:
        process.env.REACT_APP_DOMAIN +
        blog?.attributes.images.data[0].attributes.url,

      author: blog.attributes.author.data,
    };
  });
}

export default getListPost;
