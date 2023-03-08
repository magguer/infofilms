//Dependencias
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import useIsOnline from "./hooks/useIsOnline";
//CSS
import "./App.css";
//Componentes
import Header from "./components/elements/Header";
import BurguerMenuBody from "./components/elements/BurguerMenuBody";
//Rutas
import Home from "./routes/Home";
import AboutRoute from "./routes/AboutRoute";
import MovieRoute from "./routes/MovieRoute";
import SearchMovieRoute from "./routes/SearchMovieRoute";

function App() {
  const [showBurguerMenu, setShowBurguerMenu] = useState(false);
  const styleOff = "left-[-300px]";
  const styleOn = "left-0";
  const [searchWords, setSearchWords] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [filmModal, setFilmModal] = useState(null);

  const isOnline = useIsOnline();

  /*   Modal Handlers */
  const handleFilmModal = (filmModal) => {
    setFilmModal(filmModal);
    setShowModal(true);
  };
  const handleCloseFilmModal = () => setShowModal(false);

  return (
    <div className="App ">
      <div
        className={`fixed z-40 ${
          showBurguerMenu ? styleOn : styleOff
        } trasition-all duration-200`}
      >
        <BurguerMenuBody
          showBurguerMenu={showBurguerMenu}
          setShowBurguerMenu={setShowBurguerMenu}
        />
      </div>
      <div className="shadow-lg fixed w-full z-50">
        <Header
          isOnline={isOnline}
          searchWords={searchWords}
          handleCloseFilmModal={handleCloseFilmModal}
          showBurguerMenu={showBurguerMenu}
          setSearchWords={setSearchWords}
          setShowBurguerMenu={setShowBurguerMenu}
        />
      </div>
      <div className="py-[70px]">
        <Routes>
          <Route
            path={"/"}
            element={
              <Home
                showModal={showModal}
                setShowModal={setShowModal}
                filmModal={filmModal}
                setFilmModal={setFilmModal}
                handleFilmModal={handleFilmModal}
                handleCloseFilmModal={handleCloseFilmModal}
              />
            }
          />
          <Route path={"/movie/:id"} element={<MovieRoute />} />
          <Route
            path={"/search/"}
            element={
              <SearchMovieRoute
                searchWords={searchWords}
                showModal={showModal}
                setShowModal={setShowModal}
                filmModal={filmModal}
                setFilmModal={setFilmModal}
                handleFilmModal={handleFilmModal}
                handleCloseFilmModal={handleCloseFilmModal}
              />
            }
          />
          <Route path={"about"} element={<AboutRoute />} />
          <Route path={"*"} element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
