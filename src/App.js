import './App.css';
import Header from './components/Header/Header';
import Initial from './components/Initial/Initial';
import UserPage from './components/UserPage/UserPage';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/*<Initial />*/}
        <UserPage />
      </main>
    </div>
  );
}

export default App;
