import React from "react";
import { Routes, Route } from "react-router";

import Home from '../pages/home.js';
import MusicGroups from '../pages/music-groups';

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music-groups" element={<MusicGroups />} /> 
        </Routes>
    )
}
