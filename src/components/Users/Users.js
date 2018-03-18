import React from 'react';
import User from './User';
import { List } from 'semantic-ui-react';

class Users extends React.Component {
  render() {
    const { usersData } = this.props;
    return (
      <List>
        {usersData.map((user, index) => <User userName={user} key={index} />)}
      </List>
    );
  }
}

export default Users;
