import './App.css';

function App() {
  const title = "Welcome to the new blog!";
  const likes = 50;
  // const person = { name: 'Ikshul', age: 20 };
  const link = "https://www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times </p>
        {/* <p>{person}</p> */}
        <p>{10}</p>
        <p>{"Hello, ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>GOOGLE SITE</a>
      </div>
    </div>
  );
}

export default App;
