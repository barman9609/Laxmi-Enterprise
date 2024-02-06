import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keyword, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <meta name="author" content={author} />
      </Helmet>

      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "Laxmi Enterprise",
  description: "weight machine selling website",
  keyword:
    "30kg kata , 10 kg kata , weight machine , 30 kg kata price , weight machine , weight machine price",
  author: "Abhisekh Barman",
};
export default Layout;
