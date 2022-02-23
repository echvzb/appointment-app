import {useEffect, useState} from 'react';

export const LoginPage = () => {
  const [response, setResponse] = useState<string>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:8000/api/v1/user');
      const json = await res.json();
      setResponse(JSON.stringify(json));
    };
    fetchData();
  }, []);
  return <>{response}</>;
};
