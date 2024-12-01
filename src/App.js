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
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-8 col-lg-6 mx-auto mt-5">
          {/* Bu alan içerik için ayrıldı */}
          <div className="card rounded p-5 bg-success">
            <div className="card-body rounded bg-secondary d-flex flex-column justify-content-center align-items-center">
              <h2 className="badge-lg bg-primary text-white mb-3">
                Password Create App
              </h2>
              <LenghtSelector getSelectValue={getSelectValue} />
              <ShowPassword passKeys={passkeys} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
