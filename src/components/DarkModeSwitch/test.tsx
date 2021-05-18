import { render, screen } from '@testing-library/react'

import DarkModeSwitch from '.'

describe('<DarkModeSwitch/ >', () => {
  it('should render with a checkbox input', () => {
    render(<DarkModeSwitch />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })
})
