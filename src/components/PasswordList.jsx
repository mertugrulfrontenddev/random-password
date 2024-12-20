import { Link } from "react-router-dom";

const PasswordList = ({ allPasswords }) => {
  return (
    <>
      <h2 className="badge-lg  text-white mb-1 p-1 fs-2 fw-bold text-center">
        Your Password List
      </h2>
      <div className="container rounded  min-height">
        <div className="card w-auto mt-1 min-height">
          <div className="card-body">
            <ul className="list-group ">
              {allPasswords.length === 0 ? (
                <div className="container">
                  <div className="card ">
                    <div className="card-body  p-1">
                      <p className="text-secondary">
                        You haven't added any passwords yet. Please go back to
                        the password page.
                      </p>
                      <span className="text-secondary">
                        Click
                        <Link
                          className="link navbar-brand text-primary ms-2 me-2"
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
                  <li
                    className="list-group-item border-primary  p-1 me-2"
                    key={password.id}
                  >
                    <span className="text-secondary">
                      {index + 1 + ")"} Your
                      <span className="badge bg-danger   p-1 ms-2 me-2">
                        {password.platform}
                      </span>
                      password is
                    </span>
                    <span className="badge bg-primary   p-2 ms-2">
                      {password.password}
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordList;
