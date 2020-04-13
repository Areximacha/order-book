import React from 'react'
import { render } from '@testing-library/react'

import OrderList from './OrderList'

describe('<OrderList />', () => {
  const initProps = {
    data: [
      ['6779.62', '0.74879474'],
      ['6764.34', '0.65384902'],
      ['6739.93', '0.66301378'],
    ],
  }
  describe('@render', () => {
    it('should render the props passed to it', () => {
      const { getByText } = render(<OrderList {...initProps} />)

      initProps.data.forEach((dataSet) => {
        expect(getByText(dataSet[0])).toBeTruthy()
        expect(getByText(dataSet[1])).toBeTruthy()
      })
    })
  })
})
