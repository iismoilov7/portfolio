import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "@src/pages/Landing";

const RouterRoutes = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
  </Routes>
)


const App = () => {
  return (
    <BrowserRouter>
      <RouterRoutes />
    </BrowserRouter>
  )
}

export default App;