import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "@src/pages/Landing";
import BaseLayout from "@src/layouts/BaseLayout";
import { useEffect, useState } from "react";
import { i18 } from "./hooks/languages";
import NotFound from "./components/common/NotFound";

const RouterRoutes = () => (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path="/" element={<Landing />} />
    </Route>

    <Route element={<BaseLayout />}>
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);


const App = () => {
  const [heartStatus, setHeartStatus] = useState(" 💚");

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      setHeartStatus(" 💚");
    } else {
      setHeartStatus(" 💔");
    }
  };

  useEffect(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);

    document.title = i18.t("common.title") + heartStatus;

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [heartStatus]);


  return (
    <div className="wrapper">
      <BrowserRouter>
        <RouterRoutes />
      </BrowserRouter>
    </div>
  )
};

export default App;
