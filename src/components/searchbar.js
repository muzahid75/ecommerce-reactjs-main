import axios from "axios";
import { useState } from "react";
import { Outlet } from "react-router-dom/dist";

export default function SearchBar() {
  const [activeSearch, setActiveSearch] = useState([]);
  async function searchItem(e) {
    // console.log(e.target.value);
    if (e.target.value == "") {
      setActiveSearch([]);
      return false;
    }

    try {
      var response = await axios.get(
        "https://dummyjson.com/products?skip=0&limit=100"
      );
      var productData = response.data.products;
      var searchData = productData
        .filter((w) => w.title.toLowerCase().includes(e.target.value.toLowerCase()))
        // .map((x) => x.title)
        .slice(0, 8);
      console.log(searchData);
      setActiveSearch(searchData);
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <>
      <form className="w-full relative">
        <div className="relative">
          <input
            type="search"
            placeholder="Type your search here"
            className="w-full p-4 rounded-full bg-slate-200 border border-none text-black"
            onChange={(e) => searchItem(e)}
          />
        </div>
        {activeSearch.length > 0 && (
          <div className="absolute z-10 top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
            {activeSearch.map((s) => (
              <a href={"/details/" + s.id}>{s.title}</a>
            ))}
          </div>
        )}
      </form>
    </>
  );
}