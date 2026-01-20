import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="img/icon.png"
              alt="React Landing Page Logo"
              style={{ height: "50px" }}
            />
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="/" className="page-scroll">
                ပင်မစာမျက်နှာ
              </a>
            </li>
            <li>
              <a href="/about" className="page-scroll">
                အကြောင်းအရာ
              </a>
            </li>

            <li className="dropdown">
              <a
                href="#"
                role="button"
                className="page-scroll dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                သာသနာ့အလှူ
                <img
                  src="/img/icons/dropdown.png"
                  alt=""
                  className="dropdown-icon"
                  aria-hidden="true"
                />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/accounts" className="page-scroll">
                    လှူဒါန်းရန်
                  </a>
                </li>
                <li>
                  <a href="/donors" className="page-scroll">
                    အလှူရှင်စာရင်း
                  </a>
                </li>
                <li>
                  <a href="/donation-history" className="page-scroll">
                    အလှူမှတ်တမ်း
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a
                href="#"
                role="button"
                className="page-scroll dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                သတင်းများ
                <img
                  src="/img/icons/dropdown.png"
                  alt=""
                  className="dropdown-icon"
                  aria-hidden="true"
                />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/news" className="page-scroll">
                    Facebook သတင်းများ
                  </a>
                </li>
                <li>
                  <a href="/newsfeed" className="page-scroll">
                    ကျောင်းတိုက်သတင်းများ
                  </a>
                </li>
                <li>
                  <a href="/videos" className="page-scroll">
                    ရုပ်သံဖိုင်များ
                  </a>
                </li>
              </ul>
            </li>

            <li className="dropdown">
              <a
                href="#"
                role="button"
                className="page-scroll dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ဓာတ်ပုံများ
                <img
                  src="/img/icons/dropdown.png"
                  alt=""
                  className="dropdown-icon"
                  aria-hidden="true"
                />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="/novices" className="page-scroll">
                    သာမဏေများ
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="page-scroll">
                    ကျောင်းတိုက်လှုပ်ရှားမှုများ
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/contact" className="page-scroll">
                ဆက်သွယ်ရန်
              </a>
            </li>
            <li>
              <a
                href="https://ssn-admin.ilbc.edu.mm/admin/login"
                className="page-scroll"
                style={{
                  display: "inline-block",
                  padding: "10px 16px",
                  backgroundColor: "#5472D2",
                  color: "#F0F2F5",
                  borderRadius: "12px",
                  textDecoration: "none",
                }}
              >
                အကောင့်
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
