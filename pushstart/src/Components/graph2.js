import * as d3 from "d3";
import uparrowblue from '../media/up-arrow-blue.svg';

export default function drawChart2(id) {
    var pi = 22.0/7;
    var percentage = 75;
    var startAngle = 1.5 * pi;
    var angle = startAngle + percentage * 2 * pi / 100;
    var width = 300;
    var height = 200;

    var line = d3.arc()
        .innerRadius(80)
        .outerRadius(80)
        .startAngle(0)
        .endAngle(2 * pi);

    var line2 = d3.arc()
        .innerRadius(80)
        .outerRadius(80)
        .startAngle(startAngle)
        .endAngle(angle);

    var svg = d3.select(id).append("svg")
        .attr("width", width)
        .attr("height", height);


    svg.append("path")
        .style("stroke", "#A8D1EE")
        .style("stroke-width", "4px")
        .style("stroke-linejoin", "round")
        .style("stroke-dasharray", "8, 9")
        .attr("d", line)
        .attr("transform", 'translate(' + width/2 + ',' + height / 2 + ')');

    svg.append("path")
        .style("stroke-width", "7px")
        .style("stroke-linejoin", "round")
        .style("stroke", "#4FA4DD")
        .attr("d", line2)
        .attr("transform", 'translate(' + width / 2 + ',' + height / 2 + ')')
        .call(transition);
        
    svg.append('text')
        .text("Currently")
        .attr("class", "top-text")
        .attr('text-anchor', 'middle')
        .attr("transform", 'translate(' + width / 2 + ',' + (height-80) / 2 + ')');


    svg.append('text')
        .text(percentage)
        .attr("class", "middle-text")
        .attr('text-anchor', 'middle')
        .attr("transform", 'translate(' + width / 2 + ',' + (height+10) / 2 + ')');

    svg.append('text')
        .text("5")
        .attr("class", "middle-text-2")
        .style("fill", "#2EC4A6")
        .attr('text-anchor', 'middle')
        .attr("transform", 'translate(' + (width+20) / 2 + ',' + (height+80) / 2 + ')');

    svg.append("svg:image")
      .attr('x', -22)
      .attr('y', -33)
      .attr('width', 23)
      .attr('height', 45)
      .attr("xlink:href", uparrowblue)
      .attr("transform", 'translate(' + width / 2 + ',' + (height+80) / 2 + ')');

    svg.append('text')
        .text("from last month")
        .attr("class", "bottom-text")
        .attr('text-anchor', 'middle')
        .attr("transform", 'translate(' + width / 2 + ',' + (height+110) / 2 + ')');

    function transition(path) {
        path.transition()
          .duration(4000)
          .attrTween("stroke-dasharray", tweenDash)
          .on("end", function () { d3.select(this).attr("stroke-dasharray", null); });
    }

    function tweenDash() {
      var l = this.getTotalLength(),
          i = d3.interpolateString("0," + l, l + "," + l);
      return function(t) { return i(t) };
    }
    
  }