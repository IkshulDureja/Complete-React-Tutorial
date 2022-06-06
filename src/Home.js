import { useState } from "react";

const Home = () => {

    // let name = "mario";
    const [name, setName] = useState("mario")
    const [age, setAge] = useState(25)

    const handleClick = (e) => {
        setName("luigi");
        setAge(30);
        // console.log("Hello, ninjas!", e);
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name, e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain("mario", e)}>Click me again</button>
        </div>
    );
}

export default Home;