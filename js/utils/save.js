function saveWorld() {
    var necromancer = new Resurrect();
    let json = []
    lines.forEach(line => {
        json.push(necromancer.stringify(line));
    })
    localStorage.setItem("lines", json)
}

function loadWorld() {
    var necromancer = new Resurrect();
    JSON.parse(localStorage.getItem("lines")).forEach(line => {
        console.log(line)
        var foo = necromancer.resurrect(json);
        console.log(line)
    });
}