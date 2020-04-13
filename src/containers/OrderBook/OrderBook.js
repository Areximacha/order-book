import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import socket from '../../utils/webSocket'
import usePrevious from '../../utils/usePrevious'
import OrderList from '../../components/OrderList/OrderList'

import {
  OrderBookWrapper,
  OrderBookSection,
  OrderBookSectionHeading,
  ErrorMessage,
} from './OrderBook.style'

const OrderBook = ({ currentPair }) => {
  const [bidsState, setBidsState] = useState([])
  const [asksState, setAsksState] = useState([])
  const [error, setError] = useState(null)
  const prevPair = usePrevious(currentPair)
  useEffect(() => {
    socket.onmessage = (event) => {
      try {
        if (event.data) {
          const {
            data: { bids = [], asks = [] },
          } = JSON.parse(event.data)

          setBidsState(bids)
          setAsksState(asks)
        }
      } catch (err) {
        setError(err)
      }
    }

    socket.onerror = (err) => {
      setError(err)
    }

    return () => {
      socket.close()
    }
  }, [])

  useEffect(() => {
    if (socket.readyState === socket.OPEN) {
      sendToChannel(prevPair, false)
      sendToChannel(currentPair, true)
    }
  }, [currentPair])

  const sendToChannel = (channel, subscribe) => {
    if (channel) {
      socket.send(
        JSON.stringify({
          event: `${subscribe ? `bts:subscribe` : `bts:unsubscribe`}`,
          data: {
            channel: `order_book_${channel}`,
          },
        })
      )
    }
  }

  if (error)
    return (
      <ErrorMessage>
        Something has gone wrong with the data connection
      </ErrorMessage>
    )

  return (
    <OrderBookWrapper>
      <OrderBookSection>
        <OrderBookSectionHeading>Bids</OrderBookSectionHeading>
        <OrderList data={bidsState} />
      </OrderBookSection>
      <OrderBookSection>
        <OrderBookSectionHeading>Asks</OrderBookSectionHeading>
        <OrderList data={asksState} />
      </OrderBookSection>
    </OrderBookWrapper>
  )
}

OrderBook.propTypes = {
  currentPair: PropTypes.string,
}

OrderBook.defaultProps = {
  currentPair: undefined,
}

export default OrderBook
