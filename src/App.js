

function Food({ fav }) {
  return <h1> {fav}</h1>
}

function App() {
  return (
    <div className="App">
      <Food fav="kimchi" something={true} />
    </div>
  );
}

export default App;
