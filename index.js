const findMatching = (drivers,name) =>{
    return drivers.filter(driver=> driver.toLowerCase() === name.toLowerCase())
}

const fuzzyMatch = (drivers, letter) =>{
    return drivers.filter(driver=> driver.toLowerCase().indexOf(letter.toLowerCase())=== 0)
}

const matchName = (drivers,name) =>{
    return drivers.filter(driver =>driver.name=== name)
}

