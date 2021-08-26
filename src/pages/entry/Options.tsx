import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import {Row } from "react-bootstrap"
import ScoopOptions from './ScoopOptions';

const Options: FC<{ optionsType: string }> = ({ optionsType }) => {
  // using type any as we don't explict say what the data will look like yet
  const [items, setItems] = useState<any[]>([]);

  const fetch = async () => {
    try {
      const { data } = await axios.get(`http://localhost:3000/${optionsType}`);
      setItems(data);
    } catch (e) {
      console.log('There is a error ', e.message);
    }
  };

  useEffect(() => {
    fetch();
  }, [optionsType]);

  const ItemComponent = optionsType === 'scoops' ? ScoopOptions : null ;


  // @ts-ignore because of null value for devlopment
  const optionItems = items.map((e) => ( <ItemComponent key={e.name} imagePath={e.imagePath} name={e.name} />))





  return (
  <Row> {optionItems} </Row>);
}


export default Options;
