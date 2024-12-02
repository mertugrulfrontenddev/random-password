const PasswordAddButton = ({ addPasswords, generatedPassword }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body p-1 text-center ">
          <button
            className="btn btn-outline-primary  fw-bold"
            onClick={() => addPasswords(generatedPassword)}
          >
            Save Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordAddButton;
