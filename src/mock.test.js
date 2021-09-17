describe('Mock', () => {
  it('create a callable function', () => {
    const mock = jest.fn() //mocka uma função
    mock('developer')
    
    expect(mock).toHaveBeenCalled()
    expect(mock).toHaveBeenCalledWith('developer')
  })

  it('implementation', () => {
    const add = jest.fn().mockImplementation((a, b) => 5)
    
    expect(add(1, 2)).toBe(5)
    expect(add).toHaveBeenCalledWith(1, 2)
  })
})
