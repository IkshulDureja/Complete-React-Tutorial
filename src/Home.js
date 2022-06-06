import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then((res) => {
                    // console.log(res);
                    if (!res.ok) {
                        throw Error("could not fetch the data for that resource")
                    }
                    return res.json();
                })
                .then((data) => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    // console.log(err.message);
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000)
    }, []);



    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading..</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        </div>
    );
}

export default Home;