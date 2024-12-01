import logo from "./logo.svg";
import "./App.css";
import LenghtSelector from "./components/LenghtSelector";
import { useState } from "react";
import ShowPassword from "./components/ShowPassword";

function App() {
  let [passkeys, setPasskey] = useState([]);

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
    let newKeys = [];

    let password = getRandomChar(selectValue);

    setPasskey([password]);
  }
  return (
    <div className="container-fluid d-flex flex-column  gap-2 ">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 mx-auto ">
          {/* Bu alan içerik için ayrıldı */}
          <div className="card rounded p-3 bg-white ">
            <div className="card-body rounded bg-secondary d-flex flex-column justify-content-center align-items-center">
              <h2 className="badge-lg  text-white mb-1 p-1 fs-2 fw-bold">
                Password Create App
              </h2>
              <LenghtSelector getSelectValue={getSelectValue} />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 mx-auto ">
          {/* Bu alan içerik için ayrıldı */}
          <div className="card rounded p-2 bg-white">
            <div className="card-body rounded bg-secondary d-flex flex-column justify-content-center align-items-center">
              <ShowPassword passKeys={passkeys} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
