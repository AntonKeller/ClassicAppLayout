import React from 'react'
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import BuyBlock from "./components/BuyBlock/BuyBlock";
import TicketsBlock from "./components/Content/TicketsBlock/TicketsBlock";
import CommentBlock from "./components/CommentBlock/CommentBlock";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Content />
      <BuyBlock />
      {/*<TicketsBlock />*/}
      {/*<CommentBlock />*/}
      {/*<Footer />*/}
    </div>
  );
}

export default App;
