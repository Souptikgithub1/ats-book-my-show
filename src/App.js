import './App.scss';
import Header from './components/Header/Header';
import Modal from "./components/Modal/Modal";
import {useState} from 'react';

function App() {
    const [visibility, setVisibility] = useState(false);

    const handleModalOpen = (e) => {
        setVisibility(true);
    }

    const handleModalClose = (event) => {
        setVisibility(event);
    }

    return (
    <div className="App">
      <Header />
      <button onClick={(e) => handleModalOpen(e)}>show modal</button>
      <div>
          <Modal visibility={visibility}
                    onModalClose={(e) => handleModalClose(e)}>
              <div style={{color: 'red'}}>hello</div>
          </Modal>
      </div>
    </div>
  );
}

export default App;
