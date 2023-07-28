import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { MultiplicatingComponent } from "../MainBody/Multiplicating";
import { AboutComponent } from "../About/About";
// import { LoginComponent } from "../login/login.component";
// import { RegisterComponent } from "../register/register.component";


export function TutorialComponent()
{
    return(
        <div className="container-fluid">
            <h2>Multiplicating Table</h2>
            <BrowserRouter>
                <section className="row">
                    <nav>
                       <div className="btn-group-vertical">
                            <Link to="login" className="btn btn-primary mb-2"> About </Link>
                            <Link to="register" className="btn btn-primary">Register</Link>
                       </div>
                    </nav>
                    <div>
                    <Routes>
                       <Route path="/" element={<h2>Shopping Home Page</h2>} />
                       <Route path="login" element={<MultiplicatingComponent/>} />
                       <Route path="register" element={<AboutComponent />} />
                    </Routes>
                    </div>
                </section>
             
            </BrowserRouter>
        </div>
    )
}