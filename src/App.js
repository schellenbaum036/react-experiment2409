import React from "react";
import Header from "./Header";
import DailyReport from "./DailyReport";
import Illustration from "./Illustration";
import Footer from "./Footer";
import Border from "./Border";

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
