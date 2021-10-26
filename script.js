const data = [{ x: 1, y: 2 }, { x: 2, y: 11 }, { x: 3, y: 3 }, { x: 4, y: 8 }];

function clearNode(node) {
  // Remove the jQuery attached data from the node
  const chartData = $(node).data("dxChart");
  if (chartData) {
    chartData._dispose();
    $(node).removeData("dxChart");
  }
  const componentData = $(node).data("dxComponents");
  if (componentData) {
    $(node).removeData("dxComponents");
  }

  // Remove any child nodes
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }

  // Remove any non-original attributes
  $.map(node.attributes, a => a.name).
  forEach(n => {
    if (n != "id") {
      node.removeAttribute(n);
    }
  });
}

$(() => {
  $("#chartButton").dxButton({
    text: "Show Chart",
    onClick: () => {
      var chart = $("#chart");
      clearNode(chart[0]);
      chart.dxChart({
        dataSource: data,
        series: [{
          argumentField: "x",
          valueField: "y" }] });


    } });


  $("#clearButton").dxButton({
    text: "Clear Chart",
    onClick: () => {
      var chart = $("#chart");
      clearNode(chart[0]);
      chart.text("Empty node");
    } });

});