import './App.css';
import Form from './components/Form/form';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidbar';

function App() {
  return (
    <div>

        <Header />

        <div className='main'>
          <Sidebar />
          <Form />
        </div>

    </div>
  );
}

export default App;
