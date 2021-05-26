import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import Initial from './components/Initial/Initial';
import UserPage from './components/UserPage/UserPage';

function App(props) {
  const { isSearch } = { ...props };

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        {isSearch ? <UserPage /> : <Initial />}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({ isSearch: state.userPage.isSearch });

export default connect(mapStateToProps, null)(App);
