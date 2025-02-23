import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Serie from "../containers/Series";
import Layoutdefallt from "../layout/defaltLayout";
import Details from "../containers/Details";

function RoutesConfig() {
  return (
    <Routes>
      <Route element={<Layoutdefallt />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Serie />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default RoutesConfig;
