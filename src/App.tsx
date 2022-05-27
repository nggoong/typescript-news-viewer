import React, { useEffect, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Modal from './components/Modal';
import NewsContainer from './containers/NewsContainer';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/Favorite';

const App: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  


  return (
    <div className="App">
      <Header modal={modal} setModal={setModal}></Header>
      {modal ? <Modal setModal={setModal} /> : undefined}
      <div className="app-contents">
        <Routes>
          <Route path="/" element={<NewsContainer />}></Route>
          <Route path="favorite" element={<Favorite />}/>
        </Routes>

      </div>
    </div>
  );
}

export default App;
