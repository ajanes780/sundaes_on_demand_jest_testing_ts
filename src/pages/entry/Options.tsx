import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';
const Options: FC<{ optionsType: string }> = ({ optionsType }) => {
  // using type any as we don't explict say what the data will look like yet
  const [items, setItems] = useState<any[]>([]);

  const fetch = async () => {
    const { data } = await axios.get(`http://localhost:3000/${optionsType}`);
    setItems(data);
  };
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      {items.map((e) => (
        <Image src={e.imagePath} alt={`{e.name} scoop`} />
      ))}
    </div>
  );
};

export default Options;
