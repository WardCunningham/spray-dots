function fabricate (opt) {
  var data = []

  d3.range(25).map(function () {
    data.push({
      color: 'blue',
      cluster: 'left'
    })
    data.push({
      color: 'red',
      cluster: 'right'
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
    any(choice).cluster = any(weights[leaning])
  }
}