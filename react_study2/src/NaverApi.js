import axios from 'axios';
import React, { useState, useEffect } from 'react';

const NaverApi = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const res = await axios.get('/v1/search/blog.json', {
      params: { query: '리액트' },
      headers: {
        'X-Naver-Client-Id': 'skpaNEEpYbfmGxEydCAH',
        'X-Naver-Client-Server': 'Nmiq4XSlcg',
      },
    },);
    console.log('res', res['data']);
    setData(res['data']);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div>
        <ul>
          {data && data.items.map((e, i) => <li key={i}>{e['title']}</li>)}
        </ul>
      </div>
  );
};

export default NaverApi;
