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