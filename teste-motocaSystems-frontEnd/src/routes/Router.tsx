import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutApp from "../layout/LayoutApp";
import Edit from "../pages/Edit";
import Register from "../pages/Register";
import List from "../pages/List";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<LayoutApp />}>
                    <Route path="/edit" element={<Edit />} />
                    <Route path="/" element={<Register />} />
                    <Route path="/list" element={<List />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
