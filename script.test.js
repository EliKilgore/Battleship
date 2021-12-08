const shipFactory = require('./script')

test('generates ship with length 5', () => {
    expect(shipFactory(1, 5, 0).length).toBe(5)
})

test('generates hit locations', () => {
    let ship = shipFactory(1, 5, 0)
    ship.generateLocations()
    expect(ship.hitLocations.length).toBe(5)
})

test('marks hit locations', () => {
    let ship = shipFactory(1, 1, 0)
    ship.generateLocations()
    ship.hit(0)
    expect(
        ship.hitLocations[0].hit
    ).toBe(true)
})

test('generates correct location', () => {
    let ship = shipFactory(1, 5, 0)
    ship.generateLocations()
    expect(
        ship.hitLocations[4].coord===4
    ).toBeTruthy()
})

test('generates correct vertical location', () => {
    let ship = shipFactory(1, 5, 0, true)
    ship.generateLocations()
    expect(
        ship.hitLocations[4].coord===40
    ).toBeTruthy()
})

test('sinks the ship', () => {
    let ship = shipFactory(1, 3, 0, true)
    ship.generateLocations()
    ship.hit(0)
    ship.hit(10)
    ship.hit(20)
    expect(
        ship.isSunk()
    ).toBeTruthy()
})

test ('does not sink ship', () => {
    let ship = shipFactory(1, 3, 0, true)
    ship.generateLocations()
    ship.hit(0)
    expect(
        ship.isSunk()
    ).toBe(false)
})