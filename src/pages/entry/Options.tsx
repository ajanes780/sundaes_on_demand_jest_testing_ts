import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Row } from 'react-bootstrap';
import ScoopOptions from './ScoopOptions';
import ToppingOptions from './ToppingOptions';

import AlertBanner from '../components/AlertBanner';

const Options: FC<{ optionsType: string }> = ({ optionsType }) => {
  // using type any as we don't explicit say what the data will look like yet
  const [items, setItems] = useState<any[]>([])
  const [error, setError] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')
  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/${optionsType}`)
        setItems(data)
      } catch (e) {
        setError(true)
        setMessage(message)
      }
    }
    fetch()
  }, [optionsType])

  const ItemComponent = optionsType === 'scoops' ? ScoopOptions : ToppingOptions

  const optionItems = items.map((e) => <ItemComponent key={e.name} imagePath={e.imagePath} name={e.name} />)

  return <Row> {error ? <AlertBanner message={message} variant='' /> : optionItems} </Row>
};

export default Options;
