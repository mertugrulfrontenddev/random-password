import { useState } from "react";
const ShowPassword = ({ passKeys }) => {
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
    <div className="card mt-2 p-4 border-primary">
      <div className="card-body d-flex justify-content-center align-items-center ">
        <h2 className="badge fs-4 bg-primary m-1 p-2">Yeni Şifreniz Hazır</h2>
        <p className="badge fs-4 bg-secondary m-1 p-2">{passKeys.join("-")}</p>
        <button
          className="btn btn-success m-1 p-2"
          onClick={handleCopy} // Butona tıklanınca handleCopy çalışacak
        >
          Copy
        </button>
      </div>
      {copySuccess && (
        <div className=" badge  bg-success m-1 p-3 text-white  text-center shadow">
          {copySuccess}
        </div>
      )}
    </div>
  );
};

export default ShowPassword;
