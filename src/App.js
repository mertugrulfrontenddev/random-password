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
    <div className="card rounded min-vh-100 p-5 bg-success  d-flex justify-content-center align-items-center ">
      <div className="card-body rounded bg-white d-flex flex-column justify-content-center align-items-center w-75">
        <h2 className="display-4 fw-bold bg-primary text-white p-4 rounded shadow text-center w-75">
          Password Create App
        </h2>
        <div className="w-75">
          {/* Bu satırı ekleyerek genişliği %100 yapıyoruz */}
          <LenghtSelector getSelectValue={getSelectValue} />
        </div>
        <div className="w-75">
          {/* ShowPassword da genişliği %100 alır */}
          <ShowPassword passKeys={passkeys} />
        </div>
      </div>
    </div>
  );
}

export default App;
