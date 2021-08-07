import React from 'react'
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import FindMenu from "./components/FindMenu/FindMenu";
import TicketsBlock from "./components/Content/TicketsBlock/TicketsBlock";
import CommentBlock from "./components/CommentBlock/CommentBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <FindMenu />
      <TicketsBlock />
      <CommentBlock />
    </div>
  );
}

export default App;
