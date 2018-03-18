import React from 'react';
import {
  Card,
  Image,
  Header,
  Container
} from 'semantic-ui-react';
import Moment from 'react-moment';

const UserInfo = props => (
  <div>
    <Card>
      <Image src={props.data.avatar_url} />
      <Card.Content>
        <Card.Header>{props.data.name}</Card.Header>
        <Card.Meta>
          Joined:&nbsp;
          <Moment fromNow>{props.data.created_at}</Moment>
        </Card.Meta>
        <Card.Description>{props.data.location}</Card.Description>
      </Card.Content>
    </Card>
  </div>
);

class UserDetail extends React.Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <Container>
          <Header>Detail:</Header>
          { userInfo && <UserInfo data={userInfo} />}
        </Container>
      </div>
    );
  }
}

export default UserDetail;
