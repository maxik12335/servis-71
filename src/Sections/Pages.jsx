import Navbar from "../Components/navbar/Navbar";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";

const Pages = () => {

  return (
    <div>

      <Navbar />

      {/* main */}
        <Main />

      {/* about */}
      <About />

      {/* footer */}
      <Footer />
    </div>
  )
}

export default Pages;