// http://bost.ocks.org/mike/chart/
var d = React.DOM

var chart = React.createClass({
  getInitialState: function () {
    return { nodes: [] }
  },
  componentDidMount: function () {
    var self = this
    var force = d3.layout.force()

    force.nodes(self.props.data)
      .size([self.props.width, self.props.height])
      // .gravity(0)
      .friction(0.1)

      // .chargeDistance(5)
      .charge(-720)

      .on('tick', function (e) {
        var k = 0.3 * e.alpha
        var y = height/2
        var quadtree = d3.geom.quadtree(data)
        var padding = 2

        var nodes = force.nodes().map(function (node) {
          var x = node.cluster == 'left' ?
            self.props.width/4 :
            self.props.width * 3/4

          node.y += (y - node.y) * k
          node.x += (x - node.x) * k

          return node
        })
        self.setState({ nodes: nodes })
      })
      .start()
      .stop()

    var threshold = 0.00005
    while (force.alpha() > threshold) {
      if (force.alpha() > threshold) force.tick();
      else break
    }
    force.resume()
  },
  render: function () {
    console.log(this.state)
    var circles = this.state.nodes.map(function (e) {
      console.log(e)
      return d.circle({
        fill: e.color,
        stroke: '#fff',
        strokeWidth: 1,
        cx: e.x,
        cy: e.y,
        r: 10
      })
    })
    return d.svg({
      style: { border: '1px solid #ddd' },
      height: this.props.height,
      width: this.props.width
    }, circles)
  }
})
