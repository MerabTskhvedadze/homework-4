import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './UsersList.scss';

export const UsersList = ({ users }) => {
  const navigate = useNavigate();

  return (
    <div className='usersList'>
      {users?.map((user) => {
        return (
          <Card key={user.id} style={{ width: '18rem' }}>
            <Card.Img variant='top' src={user.image} />
            <Card.Body>
              <Card.Title>
                {user.firstName} {user.lastName}
              </Card.Title>
              <Card.Text>
                {user.address?.state}, {user.address?.city}
                <br />
                {user.email}
                <br />
                {user.phone}
              </Card.Text>
              <Button variant='primary' onClick={() => navigate(`${user.id}`)}>
                User Info
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
