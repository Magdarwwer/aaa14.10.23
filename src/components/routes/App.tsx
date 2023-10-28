import {FC} from "react";
import { Routes, Route } from 'react-router-dom';
import './style/App.css';
import { Home } from './Home';
import { Blog } from "./Blog";
import { Photos } from "./Photos";
import { Profile } from "./Profile";

export const App:FC = () => {
    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
};

export default App;