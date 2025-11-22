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
            <li>
              <a href="/donors" className="page-scroll">
                သာသနာ့အလှူ
              </a>
            </li>
            <li>
              <a href="/news" className="page-scroll">
                သတင်းများ
              </a>
            </li>
            <li>
              <a href="/gallery" className="page-scroll">
                ဓာတ်ပုံများ
              </a>
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
