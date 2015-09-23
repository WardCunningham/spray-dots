function fabricate (opt) {
  var data = []

  d3.range(25).map(function () {
    data.push({
      swing: false,
      color: 'blue',
      cluster: 'left',
      x: width / 4,
      y: height / 2
    })
    data.push({
      swing: false,
      color: 'red',
      cluster: 'right',
      x: width * 3 / 4,
      y: height / 2
    })
  })

  return data
}

function any (array) {
  return array[Math.floor(Math.random() * array.length)]
}

function favor (data, favor) {
  var mobile = data.filter(function (d) {return d.color == favor})
  return data.concat(mobile,mobile,mobile)
}

function lean (choice, leaning, count) {
  var weights = {
    left: ['left','left','right'],
    none: ['left','right'],
    right: ['left','right','right']
  }
  for (var i=0; i<count; i++) {
    var chosen = any(choice)
    var lean = any(weights[leaning])
    if (chosen.cluster != lean) {
      chosen.cluster = lean
      chosen.swing = true      
    }
  }
  return choice
}

function copy(dot) {
  return {color: dot.color, cluster: dot.cluster, swing: dot.swing}
}

function versions(data) {
  var dates = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct']
  var vers = {}
  dates.forEach(function (date) {
    vers[date] = data.map(copy)
    data = lean(data.map(copy), 'left', 5)
  })
  return vers
}