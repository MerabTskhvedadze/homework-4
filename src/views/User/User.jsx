import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import './User.scss';

export const User = () => {
  const { id } = useParams();

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function get_users() {
    try {
      setError('');
      setLoading(true);
      const resp = await axios.get(`https://dummyjson.com/users/${id}`);
      setUser(resp?.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  !loading && console.log(user);

  useEffect(() => {
    get_users();
  }, []);

  return (
    <div className='user'>
      <img src={user.image} alt={user.firstName} />
      <div className='user__info'>
        <div>
          <p>
            Name: {user.firstName}({user.maidenName}) {user.lastName}
          </p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number {user.phone}</p>
        </div>
        <div>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Eye color: {user.eyeColor}</p>
          <p>Weight: {user.weight}</p>
        </div>
      </div>
    </div>
  );
};
