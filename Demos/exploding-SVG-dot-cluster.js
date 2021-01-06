var graph = require('ngraph.generators').noLinks(142);
graph.forEachNode(assignNiceColor);

var clickMe = document.createElement('h1')
clickMe.setAttribute('style', 'font-family: Helvetica, Arial; font-weight: 200; text-align: center; margin-top: 150px;')
clickMe.innerHTML = 'CLICK ME'
document.body.appendChild(clickMe)

var svg = require('ngraph.vivasvg')(graph);
svg.nodeTemplate("<circle r='5' fill='{{node.color}}'></circle>");
svg.linkTemplate("<arrow></arrow>'");

function assignNiceColor(node) {
  var niceColors = ['#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'];
  node.color = niceColors[(Math.random() * niceColors.length)|0];
}

document.addEventListener('mousedown', function() {
  clickMe.setAttribute('style', 'display: none;')
  svg.run()
})