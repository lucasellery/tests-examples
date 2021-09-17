const users = ['banana', 'maçã']

describe('Match arrays', () => {
  it('verify array elements', () => {
    expect(users).toContainEqual('banana')
    expect(users).toContain(users[0])
  })
})
