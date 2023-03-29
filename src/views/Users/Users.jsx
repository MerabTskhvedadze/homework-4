import { useState, useEffect } from 'react';
import { Alert, Button, Card, Spinner } from 'react-bootstrap';
import { useFetch } from '../../hooks/useFetch';
import { UsersList } from './UsersList';

import './Users.scss';

export function Users() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const { data, loading, error, getData } = useFetch(
    `https://dummyjson.com/users/search?q=${searchKeyword}&limit=10`
  );
  useEffect(() => {
    getData();
  }, [searchKeyword]);

  return (
    <div className='users'>
      {error ? (
        <Alert variant='warning'>{error}</Alert>
      ) : (
        <>
          <input
            className='users__input'
            placeholder='Search'
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          {loading ? (
            <div className='loading'>
              <Spinner className='loading__spinner' />
            </div>
          ) : (
            <UsersList users={data.users} />
          )}
        </>
      )}
    </div>
  );
}
