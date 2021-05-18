import { render, screen } from 'utils/test-utils'
import { matchers } from '@emotion/jest'
expect.extend(matchers)

import Hero from '.'

describe('<Hero/ >', () => {
  it('should render with a default heading', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        name: /nextJS with chakra-ui boilerplate/i
      })
    ).toBeInTheDocument()
  })

  it('should render with a passed heading', () => {
    const newTitle = 'testing title'
    const { container } = render(<Hero title={newTitle} />)

    expect(screen.getByRole('heading', { name: newTitle })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: newTitle }).parentElement
    ).toHaveStyleRule(
      'background-image',
      'linear-gradient(to left, #7928CA, #FF0080)'
    )

    expect(container.parentElement).toMatchSnapshot()
  })
})
