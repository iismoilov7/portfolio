import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "@src/pages/Landing";

const RouterRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
  </Routes>
)


const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <RouterRoutes />
      </BrowserRouter>
    </div>
  )
}

export default App;