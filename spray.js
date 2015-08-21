// http://bost.ocks.org/mike/chart/

function sprayChart (opt) {
  var width = opt.width || 900
  var height = opt.height || 400
  var radius = opt.radius || function (d) {return d.r}
  var force = d3.layout.force()

  function spray (selection) {
    selection.each(function (data) {

      force
        .nodes(data)
        .size([width, height])
        .gravity(0) // .1 default
        .friction(opt.friction || .9)
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

      function dots (selection) {
        selection
          .attr('cx', function (d) {return d.x})
          .attr('cy', function (d) {return d.y})
          .attr('r',radius)
          .attr('fill', function (d) {return d.color})
      }

      function gravity(alpha) {
        var y = height/2
        return function(d) {
          var x = d.cluster == 'left' ? width/4 : width*3/4
          d.y += (y - d.y) * alpha
          d.x += (x - d.x) * alpha
        }
      }

      function collide(alpha) {
        var quadtree = d3.geom.quadtree(data)
        var padding = 2
        return function(d) {
          var r = radius(d) + padding,
              nx1 = d.x - r,
              nx2 = d.x + r,
              ny1 = d.y - r,
              ny2 = d.y + r
          quadtree.visit(function(quad, x1, y1, x2, y2) {
            if (quad.point && (quad.point !== d)) {
              var x = d.x - quad.point.x,
                  y = d.y - quad.point.y,
                  l = Math.sqrt(x * x + y * y),
                  r = radius(d) + radius(quad.point) + padding
              if (l < r) {
                l = (l - r) / l * alpha;
                d.x -= x *= l;
                d.y -= y *= l;
                quad.point.x += x
                quad.point.y += y
              }
            }
            return x1 > nx2
                || x2 < nx1
                || y1 > ny2
                || y2 < ny1
          })
        }
      }
    })
  }

  spray.resume = force.resume
  spray.alpha = force.alpha

  return spray
}