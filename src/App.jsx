  import { Routes, Route, HashRouter } from "react-router-dom";
  import HomePage from "./pages/HomePage";
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import Team from "./pages/Team";
  import Company from "./pages/Company";
  import AboutUs from "./pages/AboutUs";
  import Menu from "./pages/Menu";
  import { Helmet } from "react-helmet";

  function App() {
    return (
      <HashRouter hashType="noSlash">
        <Helmet>
          <title>Momowagon</title>
          <meta
            name="description"
            content="Spicy momos, steaming dumplings, and mouthwatering chutneys await at Momowagon, Kerala's favorite spot for authentic Kerala momos!"
          />

          {/* Open Graph Tags */}
          <meta
            property="og:title"
            content="Foodie Escape in Kottakkal: Beyond Momo Magic at momwagon!"
          />
          <meta
            property="og:description"
            content="Dive into momo magic at [Restaurant Name]! ️Schezwan, Chicken, Paneer, & Pan-Fried Delights! Family fun in a flea market paradise.Kottakkal's new momo must-try!"
          />
          <meta property="og:image" content="https://www.momowagon.com/foodtruck4.jpg" />
          <meta property="og:url" content="https://www.momowagon.com/" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://www.momowagon.com/" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {`
              {
                "@context": "http://schema.org",
                "@type": "Organization",
                "url": "https://www.momowagon.com/",
                "name": "Momowagon",
                "description": "Embrace the weird & wonderful!  Unique Himalayan momos & more from Momo Wagon by Weirdly Wonderful Foods. Dive into culinary artistry you won't forget!"
                // Add more properties as needed
              }
            `}
          </script>
        </Helmet>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/company" element={<Company />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </HashRouter>
    );
  }

  export default App;
