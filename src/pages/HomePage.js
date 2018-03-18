import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import { Users } from '../components';
import { mockUsers } from '../mocks';

class HomePage extends React.Component {
  render() {
    return (
      <Container>
        <Header>Top 5 GitHub users:</Header>
        <Divider />
        <p>Tap the username to see more information</p>
        <Users usersData={mockUsers} />
      </Container>
    );
  }
}

export default HomePage;
