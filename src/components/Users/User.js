// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

type UserType = {
  userName: string
};

const User = (props: UserType) => (
  <List.Item>
    <List.Content>
      <List.Header>
        <Link to={`/users/${props.userName}`}>
          <h3>{props.userName}</h3>
        </Link>
      </List.Header>
    </List.Content>
  </List.Item>
);
export default User;
