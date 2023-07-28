
import { HeaderComponent } from './Header/Header';
import './HomePage.css';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "../../node_modules/react-router-dom";
import { MultiplicatingComponent } from './MainBody/Multiplicating';

export function HomePageComponent(props){
    return(
        <>
          <HeaderComponent/>
          <MultiplicatingComponent/>
        </>
    )
}