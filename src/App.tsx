import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import Landing from "@src/pages/Landing";
import BaseLayout from "@src/layouts/BaseLayout";
import { useEffect, useState } from "react";
import { i18 } from "@src/hooks/languages";
import NotFound from "@src/components/common/NotFound";
import Projects from "@src/pages/Projects";
import About from "@src/pages/About";
import Contacts from "@src/pages/Contacts";
import Blog from "@src/pages/Blog";
import Login from "@src/pages/Login";
import { getCookie } from "@src/utils/cookie";
import { useAppDispatch } from "@src/hooks/dispatch";
import { logout } from "@src/actions/authActions";
import Article from "@src/pages/Article";
import CreateArticle from "./pages/CreateArticle";
import BlogLayout from "./layouts/BlogLayout";
import Snowfall from "react-snowfall";

const RouterRoutes = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  useEffect(() => {
    const access_token = getCookie("access_token");

    if (!access_token) {
      dispatch(logout());
    }
  })

  return (
  <Routes>
    <Route element={<BaseLayout />}>
      <Route path="/" element={<Landing />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/login" element={<Login />} />
      <Route path="/blog/create" element={<CreateArticle />} />
      <Route path="*" element={<NotFound />} />
    </Route>

    <Route element={<BlogLayout />}>
      <Route path="/blog/article" element={<Article />} />
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
      <Snowfall
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 999
      }}
      />
      <BrowserRouter>
        <RouterRoutes />
      </BrowserRouter>
    </div>
  )
};

export default App;
