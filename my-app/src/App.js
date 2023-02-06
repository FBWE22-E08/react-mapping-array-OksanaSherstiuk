import "./App.css";
import uuid from "react-uuid";

const styleMainDiv = {
  "margin-top": "30px",
  display: "flex",
};
const styleForBlocks = {
  display: "flex",
  "flex-direction": "column",
};

function App() {
  const products = [
    { name: "xbox", price: "400€", image: "https://picsum.photos/300/200" },
    {
      name: "PlayStation",
      price: "550€",
      image: "https://picsum.photos/300/200",
    },
    { name: "Nintendo", price: "200€", image: "https://picsum.photos/300/200" },
  ];

  return (
    <div className="App">
      <div className="maindiv" style={styleMainDiv}>
        {products.map((el) => (
          <div className="boxdiv" key={uuid()} style={styleForBlocks}>
            <div>
              <img src={el.image} alt={el.name} />
            </div>
            <div className="h2">
              <h2> {el.name}</h2>
            </div>
            <div className="price"> {el.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
