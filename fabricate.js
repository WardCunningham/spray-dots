function fabricate (opt) {
  var scatter = d3.random.normal(0,opt.scatter)
  var data = []

  d3.range(25).map(function () {
    data.push({
      color: 'blue',
      x: width/4 + scatter(),
      y: height/2 + scatter()
    })
    data.push({
      color: 'red',
      x: width*3/4 + scatter(),
      y: height/2 + scatter()
    })
  })

  return data
}