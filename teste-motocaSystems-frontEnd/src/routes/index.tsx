import { BrowserRouter, Routes, Route } from "react-router-dom";

import Edit from "@/pages/Edit";
import Register from "@/pages/Register";
import List from "@/pages/List";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/edit" element={<Edit />} />
                <Route path="/" element={<Register />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    )
}