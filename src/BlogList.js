const BlogList = ({ blogs, title, handleClick }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // console.log(props, blogs)
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleClick(blog.id)}>Delete Button</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;