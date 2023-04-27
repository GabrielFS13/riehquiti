import Favoritos from "Pages/Favoritos";
import Inicio from "Pages/Inicio";
import NaoEncontrado from "Pages/NaoEncontrado";
import PaginaBase from "Pages/PaginaBase";
import Player from "Pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path="Favoritos" element={<Favoritos />} />
                    <Route path=":id" element={<Player />} />
                    <Route path="*" element={<NaoEncontrado />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}