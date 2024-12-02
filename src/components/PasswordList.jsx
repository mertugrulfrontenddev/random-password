import { Link } from "react-router-dom";

const PasswordList = ({ allPasswords }) => {
  return (
    <>
      <h2 className="badge-lg  text-white mb-1 p-1 fs-2 fw-bold text-center">
        Your Password List
      </h2>
      <ul className="list-group w-100">
        {allPasswords.length === 0 ? (
          <div className="container">
            <div className="card ">
              <div className="card-body  p-4">
                <p className="text-secondary">
                  You haven't added any passwords yet. Please go back to the
                  password page.
                </p>
                <span className="text-secondary">
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
    </>
  );
};

export default PasswordList;
