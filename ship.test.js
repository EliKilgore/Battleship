const ship = require('./ship')

test('generates ship with length 5', () => {
    expect(ship(1, 5, 0).length).toBe(5)
  })
  
test('marks hits', () => {
      let ship1 = ship(1, 1, 0)
      ship1.hit(0)
      expect(
          ship1.hitLocations[0].hit
      ).toBe(true)
  })
  
test('sinks the ship', () => {
      let ship1 = ship(1, 3, 0)
      ship1.hit(0)
      ship1.hit(1)
      ship1.hit(2)
      expect(
          ship1.isSunk()
      ).toBe(true)
  })
  
test ('does not sink ship', () => {
      let ship1 = ship(1, 3, 0)
      ship1.hit(0)
      expect(
          ship1.isSunk()
      ).toBe(false)
  })

test ('generates coordinates', () => {
    let ship1 = ship(1, 3, 0, true)
    expect(
        ship1.hitLocations[2].coord
    ).toBe(20)
})
