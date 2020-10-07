import React from 'react';
import Header from './header';
import Chat from './chat';
import FrenRequestList from './fren-request-list';
import FrensList from './frens-list';
import Footer from './footer';
import LoginPage from './login-page';
import NearbyFrensList from './nearby-frens-list';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'login',
        params: {}
      },
      user: {}
    };
    this.setView = this.setView.bind(this);
    this.addUser = this.addUser.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  addUser(userName) {
    this.setState({
      user: {
        user: userName.user,
        userId: userName.userId
      }
    });
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: {}
      }
    });
  }

  changeView(state) {
    switch (state) {
      case 'frensList':
        return (
          <>
            <Header />
            <FrensList />
            <Footer />
          </>
        );
      case 'frensNearby':
        return (
          <>
            <Header />
            <NearbyFrensList userId={this.state.user.userId} />
            <Footer />
          </>
        );
      case 'frenRequestList':
        return (
          <>
            <Header text='Fren Requests' />
            <FrenRequestList userId='6' />
          </>
        );
      case 'login':
        return <LoginPage addUser={this.addUser} setView={this.setView} />;

      case 'chat':
        return (
          <>
            <Header user={this.state.user} />
            <Chat user={this.state.user} />
          </>
        );
    }
  }

  render() {
    return (
      <>
        { this.changeView(this.state.view.name)}
      </>
    );
  }
}
