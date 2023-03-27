import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';

import { Users } from './views/Users';
import { User } from './views/User';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='users' element={<Users />} />
        <Route path='*' element={<h1>Error 404 Page Not Found</h1>} />
      </Route>
      <Route path='users/:id' element={<User />} />
    </Routes>
  );
}

export default App;
