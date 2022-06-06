const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props, blogs)
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview">
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;