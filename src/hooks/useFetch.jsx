import { useState } from 'react';

import axios from 'axios';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function getData() {
    try {
      setError('');
      setLoading(true);
      const resp = await axios.get(url);
      setData(resp.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  return { data, loading, error, getData };
};
