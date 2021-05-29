import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Header from './components/Header/Header';
import Initial from './components/Initial/Initial';
import UserPage from './components/UserPage/UserPage';

function App(props) {
  const { isSearchQuery } = { ...props };

  return (
    <div className='App'>
      <Header />
      <main className='main'>
        {isSearchQuery ? <UserPage /> : <Initial />}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({ isSearchQuery: state.userPage.isSearchQuery });

export default connect(mapStateToProps, null)(App);
