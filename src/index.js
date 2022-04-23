import { ReactDOM } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import App from './app'
import {createRoot} from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<BrowserRouter><App/></BrowserRouter>)


