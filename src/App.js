import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Blog from "./components/pages/Blog";
import ContactPage from "./components/pages/ContactUs";
import Layout from "./components/templates/Layout";
import PostPage from "./components/pages/Post";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="/post">
            <Route path=":postId" element={<PostPage />} />
          </Route>
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
