// http://bost.ocks.org/mike/chart/

function sprayChart (opt) {
  var width = opt.width || 900
  var height = opt.height || 400
  var force = d3.layout.force()

  function spray (selection) {
    selection.each(function (data) {

      force
        .nodes(data)
        .size([width, height])
        .gravity(0) // .1 default
        .friction(.9) // .9 default
        .charge(0) // -30 default
        .on("tick", tick)
        .start()

      var svg = d3.select(this).selectAll('svg').data([data])

      svg.enter()
        .append('svg')
        .style('border',"1px solid #ddd")

      svg
          .attr('width',width)
          .attr('height',height)

      svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
          .call(dots)
          .call(force.drag)

      function tick (e) {
        svg.selectAll('circle')
          .each(gravity(.3 * e.alpha))
          .each(collide(.5))
          .call(dots)
      }

    })
  }

  spray.resume = force.resume
  spray.alpha = force.alpha

  return spray
}