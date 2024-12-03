import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LenghtSelector from "./components/LenghtSelector";
import { useState } from "react";
import ShowPassword from "./components/ShowPassword";
import Navbar from "./components/Navbar";
import PasswordAddButton from "./components/PasswordAddButton";
import PasswordList from "./components/PasswordList";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Banner from "./components/Banner";

function App() {
  let [passkeys, setPasskey] = useState([]);
  let [visLabel, setVisLabel] = useState(false);

  let [allPasswords, setAllPasswords] = useState([]);
  function getRandomChar(length) {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_+";
    let password = "";

    for (let i = 0; i < Number(length); i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);

      password += characters.charAt(randomIndex);
    }

    return password;
  }

  function getSelectValue(selectValue) {
    let password = getRandomChar(selectValue);
    setVisLabel(true);
    setPasskey([password]);
  }

  const addPasswords = (password, platform) => {
    setAllPasswords((prevPasswords) => [
      ...prevPasswords,
      { id: Date.now(), platform, password },
    ]);
  };
  return (
    <Router>
      <div className="row">
        <div className="col-12 col-md-8 col-lg-9 mx-auto  mb-2 ">
          <div className="card rounded">
            <Banner />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8 col-lg-9 mx-auto  mb-2 ">
          <div className="card rounded">
            <Navbar />
          </div>
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div className="row">
              <div className=" col-12 col-md-8 col-lg-9 mx-auto">
                <div className="card rounded p-1 bg-white ">
                  <div className="card-body rounded bg-secondary ">
                    <h2 className="badge-lg  text-white mb-1 p-1 fs-2 fw-bold text-center">
                      Password Create App
                    </h2>
                    <LenghtSelector getSelectValue={getSelectValue} />
                    {visLabel && (
                      <span>
                        <ShowPassword passKeys={passkeys} visLabel={visLabel} />
                        <PasswordAddButton
                          addPasswords={addPasswords}
                          generatedPassword={passkeys[0]}
                        />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          }
        ></Route>
        <Route
          path="/my-all-passwords"
          element={
            <div className="row">
              <div className=" col-12 col-md-8 col-lg-9 mx-auto">
                <div className="card rounded p-1 bg-white ">
                  <div className="card-body rounded bg-secondary d-flex flex-column align-items-center  ">
                    <PasswordList allPasswords={allPasswords} />
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
