import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from './Card';

import axios from 'axios';

import './CardList.scss';

export const CardList = ({ searchKeyword }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function get_users(searchKeyword) {
    try {
      setError('');
      setLoading(true);
      const resp = await axios.get(
        `https://dummyjson.com/users/search?q=${searchKeyword}`
      );
      setUsers(resp.data?.users);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    get_users(searchKeyword);
  }, [searchKeyword]);

  return (
    <div className='cardList'>
      {error && <div>Oops something went wrong</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => {
          return (
            <Card
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              image={user.image}
              onClick={() => navigate(`${user.id}`)}
            />
          );
        })
      )}
    </div>
  );
};
