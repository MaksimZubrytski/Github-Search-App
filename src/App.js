import { connect } from 'react-redux';
import './App.css';
import Header from './components/Header/Header';
import Initial from './components/Initial/Initial';
import UserPage from './components/UserPage/UserPage';

function App(props) {
  return (
    <div className="App">
      <Header />
      <main>
        {props.isSearch ? <UserPage /> : <Initial />}
      </main>
    </div>
  );
}

let mapStateToProps = (state) => {
  return {
    isSearch: state.userPage.isSearch,
  }
}

export default connect(mapStateToProps, null)(App);