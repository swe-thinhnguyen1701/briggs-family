import { Outlet } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
