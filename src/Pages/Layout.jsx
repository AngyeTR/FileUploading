import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";

function Layout({children}) {
  return (
    <div className="layout-container">
    <Banner />
    {
        children
    }
    <Footer />

    </div>
     
  )
}

export default Layout;
