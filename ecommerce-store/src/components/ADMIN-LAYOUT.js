import React from "react";

function ADMIN(props) {
  return (
    <div>
      <div className="page">
        <div className="page-content d-flex align-items-stretch">
          <nav className="side-navbar">
            <ul className="list-unstyled">
              <li className="active">
                <a href="/cms">
                  <i className="icon-home"></i>CMS
                </a>
              </li>
              <li>
                <a href="/games">
                  <i className="icon-home"></i>Games
                </a>
              </li>
            </ul>
          </nav>
          <div className="content-inner">
            <header className="page-header">
              <div className="container-fluid">
                <h2 className="mb-0">Settings</h2>
              </div>
            </header>

            <section>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="card">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <h3 className="h4">Settings</h3>
                      </div>
                      {props.children}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <footer className="main-footer">
              <div className="container-fluid">
                <div className="row d-flex space-between">
                  <div className="col-sm-6">
                    <p>MZ © {new Date().getFullYear()}</p>
                  </div>
                  <div className="col-sm-6 text-right">
                    <p>
                      Design by 
                      <a
                        href="https://www.linkedin.com/in/montser-zalloum-5a4895164/"
                        className="external"
                      >
                        Montaser Zalloum
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ADMIN;
