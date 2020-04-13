import styled from '@emotion/styled'
import { css } from '@emotion/core'

const OrderListRow = styled.div`
  display: flex;

  &:nth-of-type(even) {
    background-color: #f2f2f2;
  }
`

const OrderListCell = styled.div`
  flex: 1;
  text-align: center;
  padding: 5px;
`

const listHeading = css`
  font-weight: 600;
  border-bottom: 1px solid #333;
`

export { OrderListRow, OrderListCell, listHeading }
