import React from 'react';
import {
  Loader,
  Button,
  Divider,
  Message
} from 'semantic-ui-react';
import { UserDetail } from '../components';
import axios from 'axios';

class UserInfo extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    const { match } = this.props;
    const { userName } = match.params;
    if (userName) {
      axios
        .get('https://api.github.com/users/' + userName)
        .then(user => {
          this.setState({ userInfo: user.data, loading: false });
        })
        .catch(error => this.setState({ error, loading: false }));
    }
  }

  render() {
    const { userInfo, loading, error } = this.state;
    const readyForDisplay = !(loading || error);
    return (
      <div>
        <Button.Group basic>
          <Button
            floated="left"
            icon="left chevron"
            onClick={() => this.props.history.push('/')}
          />
        </Button.Group>
        <Divider />
        <Loader active={loading} inline="centered" />
        {error && (
          <Message negative>
            <Message.Header>
              We're sorry we can't fetch the data this time
            </Message.Header>
          </Message>
        )}
        {readyForDisplay && <UserDetail userInfo={userInfo} />}
      </div>
    );
  }
}

export default UserInfo;
