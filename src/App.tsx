import './App.css';
import UserPage from './page/UserPage';

function App() {

  return (
    <div className="App">
      <div className='home-button'>
        <img src="/images/home-icon.png" width="100"></img>
      </div>
      <UserPage></UserPage>
    </div>
  );
}

export default App;
