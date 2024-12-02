import { Link } from "react-router-dom";

const PasswordList = ({ allPasswords }) => {
  return (
    <div className="container-fluid">
      <div className="card">
        <div className="card-body d-flex flex-column  align-items-center p-4">
          <h2>YOUR PASSWORD LIST </h2>
          <ul className="list-group w-50">
            {allPasswords.length === 0 ? (
              <div className="container">
                <div className="card ">
                  <div className="card-body d-flex flex-column p-5">
                    <p>
                      Henüz bir şifre eklemediniz lütfen şifre sayfasına dönünüz
                    </p>
                    <span>
                      Dönmek için lütfen
                      <Link
                        className="link navbar-brand text-primary ms-2"
                        to="/"
                      >
                        Tıklayınız...
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              allPasswords.map((password, index) => (
                <li className="list-group-item border-primary p-1" key={index}>
                  {index + 1 + ")"} {password}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PasswordList;
