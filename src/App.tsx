import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import "./styles/global.scss";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
};

export default App;
