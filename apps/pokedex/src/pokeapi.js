import { useEffect, useState } from 'react';

const BASE_URL = new URL('https://pokeapi.co/api/v2/');

export const GetPokemonByName = (name) => {
  const URI = new URL(`pokemon/${name.toLowerCase()}`, BASE_URL);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (name != '') {
      setData(null);
      setError(null);
      setLoading(true);
      fetch(URI)
        .then((data) => data.json())
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
          setError(error);
        });
    }
  }, [name]);

  return { data, loading, error };
};
