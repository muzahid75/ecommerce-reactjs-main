// import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';
import Details from './components/details';
import Checkout from './components/checkout';
import SearchBar from './components/searchbar';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import NabVar from './components/nabvar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Dashboard />} />
      <Route path="details/:id" element={<Details />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <NabVar/>
    //     <RouterProvider router={router} />
    //   </header>
    // </div>
    <>
      <NabVar/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
