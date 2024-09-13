import React from "react";
import Header from "./components/Header";
import DailyReport from "./components/DailyReport";
import Illustration from "./components/Illustration";
import Footer from "./components/Footer";
import Border from "./components/Border";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="daily-report">
          <DailyReport />
        </section>
        <Border />
        <section id="illustration">
          <Illustration />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
