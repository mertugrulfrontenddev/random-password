import { useState } from "react";

const LenghtSelector = ({ getSelectValue }) => {
  let [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className="card p-4 mt-2 border-primary">
      <div className="card-body">
        <select
          className="form-select-sm me-1 fw-bold text-secondary"
          aria-label="Default select example"
          onChange={(event) => handleChange(event)}
          value={value}
        >
          <option value="" disabled>
            Select Your Password Lenght Please
          </option>
          <option value="6">6 digits long</option>
          <option value="8">8 digits long</option>
          <option value="10"> 10 digits long</option>
          <option value="12"> 12 digits long</option>
        </select>
        <button
          type="button"
          onClick={() => {
            getSelectValue(value);
            setValue("");
          }}
          className="btn btn-primary fw-bold"
        >
          Create Password
        </button>
      </div>
    </div>
  );
};

export default LenghtSelector;
