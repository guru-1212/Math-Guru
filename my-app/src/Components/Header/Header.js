
import "./Header.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MultiplicatingComponent } from "../MainBody/Multiplicating";
import { AboutComponent } from "../About/About";
import { CubeGeneratorComponent } from "../CubeGenerator/CubeGenerator";
import { SquereGeneratorComponent } from "../SquereGenerator/SquereGenerator";
var color = "";
function Night_Day_mode(){
  color = document.querySelector("#Color_picker").value;
}

export function HeaderComponent() {
  return (
    <div>
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link class="navbar-brand"  style={{backgroundColor:color}}>
              MathTrix
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">

                  <Link to="AboutSecting" className="nav-link">About</Link>
                  
                </li>
                <li class="nav-item">
                  <Link
                    to="MulTable"
                    class="nav-link"
                    aria-current="page"
                    
                  >
                    Multiplicating Table
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="CubeGenerator" class="nav-link">
                    Cube Generator
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="SquereGenerator" className="nav-link" >
                    Squre Generator
                  </Link>
                </li>
              </ul>
              <div class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search" id="Color_picker"
                ></input>
                <button class="btn btn-outline-success" onClick={Night_Day_mode}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="MulTable" element={<MultiplicatingComponent />} />
          <Route path="AboutSecting" element={<AboutComponent />} />
          <Route path="CubeGenerator" element={<CubeGeneratorComponent/>} />
          <Route path="SquereGenerator" element={<SquereGeneratorComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
