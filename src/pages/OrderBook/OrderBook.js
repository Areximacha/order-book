import React, { useEffect, useState } from 'react'

import Layout from '../../components/Layout'
import OrderBookContainer from '../../containers/OrderBook/OrderBook'

import { PageHeading, InstrumentSelector } from './OrderBook.style'

const OrderBook = () => {
  const [tradingPairs, setTradingPairs] = useState([])
  const [currentPair, setCurrentPair] = useState(undefined)
  useEffect(() => {
    fetchTradingPairs()
  }, [])
  const fetchTradingPairs = async () => {
    const query = `/api/trading-pairs-info`

    const response = await fetch(query)
    const json = await response.json()

    setTradingPairs(json)
    setCurrentPair(json[0].url_symbol)
  }
  return (
    <Layout>
      <PageHeading>Order Book</PageHeading>
      <InstrumentSelector>
        <span>Select your instrument: </span>
        <select
          onChange={(e) => setCurrentPair(e.target.value)}
          value={currentPair}
        >
          {tradingPairs.map(({ name, url_symbol: urlSymbol }) => (
            <option value={urlSymbol} key={urlSymbol}>
              {name}
            </option>
          ))}
        </select>
      </InstrumentSelector>
      <OrderBookContainer currentPair={currentPair} />
    </Layout>
  )
}

export default OrderBook
