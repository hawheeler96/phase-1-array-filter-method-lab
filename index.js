// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(function(driverName) {
        return driverName.toLowerCase() === name.toLowerCase()
    });
}
findMatching(drivers, 'Bobby')

function fuzzyMatch(drivers, letter) {
    return drivers.filter(function(driverLetter) {
        return driverLetter.toLowerCase().substring(0, letter.length) === letter.toLowerCase()
    })
}
fuzzyMatch(drivers, "Sa")

function matchName(drivers, name) {
    return drivers.filter(function(driverLookup) {
        return driverLookup.name === name
    })
}
