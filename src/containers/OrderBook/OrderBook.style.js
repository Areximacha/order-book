import styled from '@emotion/styled'

const OrderBookWrapper = styled.div`
  display: flex;
`

const OrderBookSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const OrderBookSectionHeading = styled.h3`
  padding: 10px;
  text-align: center;
`

const ErrorMessage = styled.div`
  color: #f63440;
`

export {
  OrderBookWrapper,
  OrderBookSection,
  OrderBookSectionHeading,
  ErrorMessage,
}
