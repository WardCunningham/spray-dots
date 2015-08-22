
function radioChoices (opt) {

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

    })
  }

  return choices

}
