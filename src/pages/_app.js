import "@/styles/globals.css";
import ResponsiveAppBar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <ResponsiveAppBar />
      <Component {...pageProps} />
      <Footer />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lily+Script+One&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;800&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
