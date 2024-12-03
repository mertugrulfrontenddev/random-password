import { useState } from "react";

const PasswordAddButton = ({ addPasswords, generatedPassword }) => {
  let [platform, setPlatform] = useState("");

  let [input, setInput] = useState("");

  function handleChange(event) {
    setPlatform(event.target.value);
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }
  return (
    <div className="container mt-2">
      <div className="card d-flex flex-column align-items-center justify-content-center">
        <div className="card-body text-center">
          {/* Select Menüsü */}
          <select
            className="form-select    me-1 fw-bold text-secondary"
            aria-label="Default select example"
            onChange={(event) => handleChange(event)}
            value={platform}
            style={{ flexBasis: 270 }}
          >
            <option value="" disabled>
              Select Your Platform Please
            </option>
            <option value="Youtube">Youtube</option>
            <option value="Gmail">Gmail</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="Binance">Binance</option>
            <option value="Other">Other</option>
          </select>

          {/* 'Other' seçeneği görünürse input alanı */}
          {platform === "Other" && (
            <div className=" container d-flex align-items-center justify-content-center mt-3 ">
              <label
                htmlFor="myInput"
                style={{ flexBasis: 150 }}
                className="text-primary  "
              >
                Platform Name:
              </label>
              <input
                id="myInput"
                type="text"
                value={input}
                className="form-control"
                style={{ flexBasis: 200 }}
                onChange={(event) => handleInputChange(event)}
              />
            </div>
          )}

          {/* Save Password Button */}
          <button
            className="btn btn-outline-primary fw-bold mt-3"
            onClick={() =>
              addPasswords(
                generatedPassword,
                platform === "Other" ? `${input}` : platform
              )
            }
          >
            Save Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordAddButton;
