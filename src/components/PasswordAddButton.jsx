import { useState } from "react";

const PasswordAddButton = ({ addPasswords, generatedPassword }) => {
  let [platform, setPlatform] = useState("");

  function handleChange(event) {
    setPlatform(event.target.value);
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-body p-1 text-center ">
          <select
            className="form-select me-1 fw-bold text-secondary"
            aria-label="Default select example"
            onChange={(event) => handleChange(event)}
            value={platform}
          >
            <option value="" disabled>
              Select Your Platform Please
            </option>
            <option value="Youtube">Youtube</option>
            <option value="Gmail">Gmail</option>
            <option value="Facebook"> Facebook</option>
            <option value="Instagram"> Instagram</option>
            <option value="Binance"> Binance</option>
          </select>
          <button
            className="btn btn-outline-primary  fw-bold"
            onClick={() => addPasswords(generatedPassword, platform)}
          >
            Save Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordAddButton;
