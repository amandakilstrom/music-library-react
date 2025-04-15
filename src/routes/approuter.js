import React from "react";
import { Routes, Route } from "react-router";

import Home from '../pages/home.js';
import MusicGroups from '../pages/music-groups';
import MusicGroupInfo from '../pages/music-group-info.js';

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music-groups" element={<MusicGroups />} /> 
            <Route path="/music-group/:musicGroupId" element={<MusicGroupInfo />} />
        </Routes>
    )
}
