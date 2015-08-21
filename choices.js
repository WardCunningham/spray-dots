
function radioChoices (opt) {
  var click = opt.click || function () {}

  function choices (selection) {
    selection.each(function (data) {

      d3.select(this).selectAll('label')
        .data(data)
        .enter()
        .append('label')
          .text(String)
        .append('input')
          .attr('type','radio')
          .attr('name','date')
          .attr('value',String)
          .property('checked', function (d,i) {return i == 0})
          .on('click.choice', function (d) {click(d)})

    })
  }

  return choices

}
