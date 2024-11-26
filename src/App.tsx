import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Landing from "@src/pages/Landing";
import BaseLayout from "@src/layouts/BaseLayout";
import { useEffect, useState } from "react";
import { i18 } from "@src/hooks/languages";
import NotFound from "@src/components/common/NotFound";
import Projects from "@src/pages/Projects";
import About from "@src/pages/About";
import Contacts from "@src/pages/Contacts";

const RouterRoutes = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path="/" element={<Landing />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
    </Route>

    <Route element={<BaseLayout />}>
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>)
};


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
