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

  const addPasswords = (value) => {
    setAllPasswords((prevPasswords) => [...prevPasswords, value]);
  };
  return (
    <Router>
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
            <div className="container-fluid   gap-1">
              <div className="row">
                <div className=" col-12 col-md-8 col-lg-9 mx-auto">
                  <div className="card rounded p-2 bg-white ">
                    <div className="card-body rounded bg-secondary d-flex flex-column   min-height">
                      <h2 className="badge-lg  text-white mb-1 p-1 fs-2 fw-bold text-center">
                        Password Create App
                      </h2>
                      <LenghtSelector getSelectValue={getSelectValue} />
                      {visLabel && (
                        <p>
                          <ShowPassword
                            passKeys={passkeys}
                            visLabel={visLabel}
                          />
                          <PasswordAddButton
                            addPasswords={addPasswords}
                            generatedPassword={passkeys[0]}
                          />
                        </p>
                      )}
                    </div>
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
                <div className="card rounded p-2 bg-white ">
                  <div className="card-body rounded bg-secondary d-flex flex-column align-items-center  min-height">
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
