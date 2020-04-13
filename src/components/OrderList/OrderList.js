import React from 'react'
import PropTypes from 'prop-types'

import { OrderListRow, OrderListCell, listHeading } from './OrderList.style'

const OrderList = ({ data }) => (
  <>
    <OrderListRow>
      <OrderListCell css={listHeading}>Price</OrderListCell>
      <OrderListCell css={listHeading}>Amount</OrderListCell>
    </OrderListRow>
    {data.map((dataSet) => (
      <OrderListRow key={`${dataSet[0]}-${dataSet[1]}`}>
        <OrderListCell>{dataSet[0]}</OrderListCell>
        <OrderListCell>{dataSet[1]}</OrderListCell>
      </OrderListRow>
    ))}
  </>
)

OrderList.propTypes = {
  data: PropTypes.array.isRequired,
}

export default OrderList
