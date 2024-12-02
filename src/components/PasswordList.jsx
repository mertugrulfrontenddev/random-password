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
                      You haven't added any passwords yet. Please go back to the
                      password page.
                    </p>
                    <span>
                      Click
                      <Link
                        className="link navbar-brand text-primary ms-1 me-1"
                        to="/"
                      >
                        here
                      </Link>
                      to go back...
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
