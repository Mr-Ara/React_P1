import { ReactDOM } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import App from './app'
import {createRoot} from 'react-dom/client'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App/>)


