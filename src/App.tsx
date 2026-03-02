import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Places from "./pages/Places";
import PlaceDetails from "./pages/PlaceDetails";
import Events from "./pages/Events";
import About from "./pages/About";
import Header from "./components/Header";
import EventDetails from "./pages/EventDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="allPage min-h-screen  bg-bg text-text flex-col items-center justify-center ">
      <BrowserRouter>
        <Header />
        {/* Page content */}
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/places/:id" element={<PlaceDetails />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
