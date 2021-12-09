const ship = (id, length, startCoord, isVertical = false) => {
    
    let hitLocations = []

    const generateLocations = () => {
        for (let i = 0; i < length; i++) {
            let location = {
                hit: false,
                coord: null
            }
            if (isVertical){
                location.coord = startCoord + i * 10
            } else {
                location.coord = startCoord + i
            }
            hitLocations.push(location)
        }
    }
    const getCoords = () => {
        let coords = []
        for (let i = 0; i<length; i++) {
            coords.push(hitLocations[i].coord)
        }
        return coords
    }

    if (hitLocations.length === 0) {
        generateLocations()
    }

    const hit = (n) => {
        for (let i=0; i < length; i++) {
            if (hitLocations[i].coord === n) {
                hitLocations[i].hit = true
            }
        }
    }

    const isSunk = () => {
        return hitLocations.every(location => location.hit===true)
    }

    return { id, length, startCoord, isVertical, hitLocations, getCoords, hit, isSunk }
}

module.exports = ship
