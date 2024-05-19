import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar fixed-top navbar-expand-lg bg-light container">
          <div className="container-fluid">
            <div className="logo">
              <a className="navbar-brand" href="/">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAArlBMVEX/////
                LFL/R1r/Slv/MVT/RVn/PFf/NlX/PVf/QVj/OFb/IUz/dY3/wsf/RFX/9Pb/4OT/N0//eIv/8PL/193/Pl3/UmT/9/j
                /rrn/3+T/O1P/srv/R2D/9vf/xs3/TWL/h5f/6ev/XXD/k6L/TGf/vsj/doH/Vmv/l6T/jp3/bYL/h5n/LVX/WXX/kJ
                n/bXn/hI3/oKj/0Nb/mqn/fpH/SGX/Y3v/qrj/UnH/iJ1gVsPgAAAFZklEQVR4nO2da1uqTBSGgZCTpZWoheEhMyWzg
                9rO/f//2Ivu3mJgBlcfdGbwub86sy7u1syDAqlhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAh2QULvsXh6e/DEdd2a4M
                cf/ldTo4axwe66zz+jZpyRb+YTTrWI2zY2E1Om+hbOX/uX2Mjib+j0ZnKVv6H/GjdWT1VP5Vjc7fHG+5/2C9ydbecnl
                //Lan7gMVVv2FjLanq/5dtnjKiyT3R/knuq6EpNti3Y9kqxuxlO2+3fDy3ZvTmhz32qVsdSPuSOp7A+5wl0OzU7OkAH
                e4n5h7LTpdd+uE3U+576fsjjUPd7hLcZeD8u5RdMUSRfyBjfzA3WCd3f3hssmO7l/73IH3vcJlmG44G+jrbiVxYfzoh
                SPv33OvOMc91d25jdwd3RPv8JpDqzAjmgiqX2vrzr+E3poV2j4VeUwsTd2vevwp8TAXYv6r6JprWDV3oznzmUnivofF
                /aGS+8AXIXTfBh5DJBqZuovQ1d2IE1bqvs8fV0X3NPDYsfyTnBHeVdA9PdVFjAlfvpruaec9RoV7Q72Saz5llLAuvD1
                fVXejmdRY+YvCkBL3K63dC8t+Wuh8WBMV193diN/2BF6F3Qudv8t1XnV3T3h0+92NVsJM8XKBp6/7DWV+4mcLRFPm42
                woVFfd/Z3yxHNr7GUreEzgKe8uInoiPQ6UvsNjZk0zgRf6wupqu3v+mvSoe2vmMNMygaevu+evmvsrpPJDRjHzDm+iu
                rtwS3qRNyY9/RgnfuZE71197/knT1RdEfdSZrTOj5ll//UOL75xRGVV6Xspzoy05/OB9/C+DPvDssIauHv+kBh4jLwX
                3Q38SFBSGfe7Pe6esyLt+dbQK1nhmrp7bkKS7ybOb+T1cE/3PDXwfiGvhLtDgBx4lGI7PFsX9zY18AKyvKmLu0MOPL3
                caa1yE9KejxOH2HqN3INgTAu8JCAVDJRwJ+ZT5Ixpe34YkeSVcHdp7qn8sPgYBoc08CjyargHZGiB11w7hFq6ubtD0p7
                vJhV0/03gVc7dJQeerb2767YdNzvAdWjLvjXe9ydV3d29u16NnxxG3qUFXrx2yu0Vd3cXu28nmDxkF7Brz2mBN3ZL5d
                V2dx++rrT3H9jOUwOvTN5V2938bvDkwcwedpDQAm9ul8ir7V7//B41mTLLPpjTPtWVLHtF+i6i/nMvstt37OxL9owWeB
                thcX3ct3veZI58TXpv3wuq4J7KM513SXdslk4l3LeBl301oFzMCNtqu9uio8u5bwOPkScEXmXcjX6bGWvuX/bVcTeW+c
                Dbt+wr5J4PPHtf58O2sLp27rnAs4N5+amuUu7bDzZZebc88BR3Fx8d1z0NPKbz5YFX4l5X2/2TO4MNPLs08MTutpbuRv
                +DWfZ2yS1q5d1FiNyNT3ZOIL6YEZZUV8HdFB6d6JnS0Z/cnLnw/+Mq596c19mRpuhKjr7uoq9VbK5z7rZ5zT/P9wNN3c1
                zQYjdbopz+IGXCNUVd7fb/LDrcoxMl3eqK1nyqrun8rf5q5LdOBzzjdZLtvXdUW9RUlt1d9NeXBfYmPwZ5scTO/BPWWm7
                fitbvdw9FTLrLKbAfDfWZEeWFdbA/XDA/STdTdWzDu5whzvc4Q53uOvqLge4wx3ux3f/kOT+LN89Xkhyb8v/nZHueV2O+0
                K+u/Epx71O+06FwxJKCjvCF8gcnOZcSuM3Cix5w7iUkfRtFdqeMvk4fuc/FdjtOyab+lHt68/KqBvGaLVoP+fvQhwG87m9
                SdT4scgvuqPJ6u/6/PCs/656oTpNBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqsh/5eA9TMOYgC8AAAAASUVORK5CYII
                ="
                  alt="Bootstrap"
                  width="35"
                  height="30"
                />
                <span className="mx-2">NewsMoney</span>
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>

                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            News
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">General</a></li>
            <li><a className="dropdown-item" href="/business">Business</a></li>
            <li><a className="dropdown-item" href="/entertainment">Entertainment</a></li>
            <li><a className="dropdown-item" href="/health">Health</a></li>
            <li><a className="dropdown-item" href="/science">Science</a></li>
            <li><a className="dropdown-item" href="/sports">Sports</a></li>
            <li><a className="dropdown-item" href="/technology">Technology</a></li>
           
          </ul>
        </li>

                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>

                {/* <li className="nav-item" ><a className="nav-link" href=""> Business</a></li>
                <li className="nav-item" ><a className="nav-link" href=""> Entertainment</a></li>
                <li className="nav-item" ><a className="nav-link" href=""> General</a></li>
                <li className="nav-item" ><a className="nav-link" href=""> Health</a></li>
                <li className="nav-item" ><a className="nav-link" href=""> Science</a></li>
                <li className="nav-item" ><a className="nav-link" href=""> Sports</a></li>
                <li className="nav-item" ><a className="nav-link" href=""> Technology</a></li> */}
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
