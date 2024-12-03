import { useState } from "react";
const ShowPassword = ({ passKeys, visLabel }) => {
  const [copySuccess, setCopySuccess] = useState(""); // Kopyalama durumu

  // Kopyalama işlevi
  const handleCopy = () => {
    const passwordText = passKeys.join(""); // passKeys dizisini birleştirip string yapıyoruz

    // Clipboard'a kopyala
    navigator.clipboard
      .writeText(passwordText)
      .then(() => setCopySuccess("Password copy succesfully!"))
      .catch(() => setCopySuccess("Kopyalama başarısız."));
  };
  return (
    <div className="container mt-2">
      <div className="card p-4 mt-2 border-primary d-flex align-items-center">
        <div className="card-body">
          {visLabel && (
            <h2 className="badge bg-primary m-1 p-2">
              Your New Password is Ready!
            </h2>
          )}

          <p className="badge bg-secondary m-1 p-2">{passKeys.join("-")}</p>
        </div>
        <button
          className="btn btn-outline-primary w-25 mx-auto fw-bold"
          onClick={handleCopy} // Butona tıklanınca handleCopy çalışacak
        >
          Copy
        </button>
        {copySuccess && (
          <div className=" badge  bg-success m-1 p-3 text-white  text-center shadow">
            {copySuccess}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowPassword;
