import { useState } from 'react';

import { CardList } from './CardList';

import './Users.scss';

export function Users() {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <div className='users'>
      <input
        className='users__input'
        placeholder='Search'
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <CardList searchKeyword={searchKeyword} />
    </div>
  );
}
