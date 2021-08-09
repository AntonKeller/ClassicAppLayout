import React from 'react'
import styles from './appStyles/appStyle.module.css'
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Content from "./components/Content/Content";
import FindMenu from "./components/FindMenu/FindMenu";
import TicketsBlock from "./components/Content/TicketsBlock/TicketsBlock";
import CommentBlock from "./components/CommentBlock/CommentBlock";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Banner />
      {/*<Content />*/}
      {/*<FindMenu />*/}
      {/*<TicketsBlock />*/}
      {/*<CommentBlock />*/}
    </div>
  );
}

export default App;
