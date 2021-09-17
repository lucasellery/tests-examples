const users = {
  name: 'Lucas',
  email: 'olucasellery@gmail.com'
}

describe('Match obj', () => {
  it('basic usage', () => {
    expect(users.name).toBeDefined()
    expect(users.age).not.toBeDefined()
  })
})
