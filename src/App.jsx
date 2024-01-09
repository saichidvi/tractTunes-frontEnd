import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import ListArtists from "./pages/ListArtists";
import ListSongs from "./pages/ListSongs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/allSongs" element={<ListSongs></ListSongs>}></Route>
          <Route
            path="/allArtists"
            element={<ListArtists></ListArtists>}
          ></Route>
        </Routes>
        <ToastContainer></ToastContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
