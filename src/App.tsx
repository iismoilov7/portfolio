import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "@src/pages/Landing";
import BaseLayout from "@src/layouts/BaseLayout";

const RouterRoutes = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path="/" element={<Landing />} />
    </Route>
  </Routes>
);


const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <RouterRoutes />
      </BrowserRouter>
    </div>
  )
};

export default App;