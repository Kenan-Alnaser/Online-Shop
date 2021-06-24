import React, { useState } from "react";
import { Store, StoreContext } from "./context";
import ProductList from "./components/ProductList";

const App = () => {
  const [data, setData] = useState(Data);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const changeHandle = (e) => {
    setUserInput(e.target.value);
  };
  const lookUp = () => {
    const userText = userInput.toLocaleLowerCase().trim();
    const userTextLength = userText.length;
    let newArr = data.filter((item) => {
      const slicedProductName = item.productName.slice(0, userTextLength);
      return slicedProductName === userText;
    });
    setFilteredData(newArr);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    lookUp();
  };
  return (
    <StoreContext.Provider value={Store}>
      <h1>Welcome to our online store</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={changeHandle} value={userInput} />
        <input type="submit" value="filter" />
      </form>
      <ProductList data={userInput ? filteredData : data} />
    </StoreContext.Provider>
  );
};

export default App;
