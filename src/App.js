import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CardInfo from "./pages/CardInfo/CardInfo";


const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const onFilterChange = (value) => {
    setSearch(value);
  };

  const filteredData = search ? data.filter((card) => card.name.toLowerCase().search(search.toLowerCase()) !== -1) : data;
  const sortedData = filteredData.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character/");
      const cards = await response.json();
      setData(cards.results.slice(0, 8));
    };

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage cards={sortedData} onFilterChange={onFilterChange} />} />
        <Route path="/character/:id" element={<CardInfo cards={data} />} />
        <Route path="*" element={<MainPage cards={sortedData} />} />
      </Routes>
    </>
  );
};

export default App;
