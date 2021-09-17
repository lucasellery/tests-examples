describe('match regular expression', () => {
  it('basic usage', () => {
    expect('developer').toMatch(/\w+/)
    expect('(85)98928-9392').toMatch(/^\(\d{2}\)\d{5}-\d{4}$/)
  })
})
