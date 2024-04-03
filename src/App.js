import { useState } from 'react';
import Performance from './components/performance/Performance';
import Performances from './components/performance/Performances';
import VideoRecorder from './components/performance/record/Record';
import { VideoProvider } from './util/VideoContext';
import Modal from './components/modal/Modal';
import './scss/style.scss';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <VideoProvider>

      <Modal show={activeModal === 'newPerformanceModal'} onClose={() => setActiveModal(null)}>
        <VideoRecorder />
      </Modal>

      <div className="App">
        <h1>Your Performances</h1>
        <button onClick={() => setActiveModal('newPerformanceModal')}>Add new performance</button>

          <Performances>
            <Performance />
          </Performances>
      </div>
    </VideoProvider>
  );
}

export default App;
