import * as d3 from "d3";
import uparrowred from '../media/up-arrow-red.svg';


export default function drawChart3(id){
    var pi = 22.0/7;
    var startAngle = 1.5 * pi;
    var width = 300;
    var height = 200;

    var line = d3.arc()
        .innerRadius(80)
        .outerRadius(80)
        .startAngle(startAngle)
        .endAngle(startAngle + pi/2);

    var line2 = d3.arc()
        .innerRadius(80)
        .outerRadius(80)
        .startAngle(startAngle + pi/2)
        .endAngle(startAngle + 1.5 * pi);

    var line3 = d3.arc()
        .innerRadius(80)
        .outerRadius(80)
        .startAngle(startAngle + 1.5 * pi)
        .endAngle(startAngle + 2 * pi);

    var line4 = d3.arc()
        .innerRadius(5)
        .outerRadius(5)
        .startAngle(0)
        .endAngle(8);

    var svg = d3.select(id).append("svg")
        .attr("width", width)
        .attr("height", 250);

    svg.append("path")
        .style("stroke-width", "7px")
        .style("stroke-linejoin", "round")
        .style("stroke", "#F8E71C")
        .attr("d", line3)
        .attr("transform", 'translate(' + width / 2 + ',' + height / 2 + ')')
        .call(transition)


    svg.append("path")
        .style("stroke-width", "7px")
        .style("stroke-linejoin", "round")
        .style("stroke", "#F5A622")
        .attr("d", line)
        .attr("transform", 'translate(' + width / 2 + ',' + height / 2 + ')')
        .call(transition)


    svg.append("path")
        .style("stroke-width", "7px")
        .style("stroke-linejoin", "round")
        .style("stroke", "#D00017")
        .attr("d", line2)
        .attr("transform", 'translate(' + width / 2 + ',' + height / 2 + ')')
        .call(transition);

    svg.append("path")
        .style("stroke-width", "3px")
        .style("stroke", "#D00017")
        .attr("d", line4)
        .attr("transform", 'translate(' + (width-215) / 2 + ',' + (height+200) / 2 + ')');

    svg.append("path")
        .style("stroke-width", "3px")
        .style("stroke", "#F5A622")
        .attr("d", line4)
        .attr("transform", 'translate(' + (width-65) / 2 + ',' + (height+200) / 2 + ')');

    svg.append("path")
        .style("stroke-width", "3px")
        .style("stroke", "#F8E71C")
        .attr("d", line4)
        .attr("transform", 'translate(' + (width+125) / 2 + ',' + (height+200) / 2 + ')');

        
    svg.append('text')
        .text("Currently")
        .attr("class", "top-text")
        .attr('text-anchor', 'middle')
        .attr("transform", 'translate(' + width / 2 + ',' + (height-80) / 2 + ')');

    svg.append('text')
        .text('High')
        .attr("class", "label-text")
        .style("fill", "#D00017")
        .attr('text-anchor', 'middle')
        .attr("transform", 'translate(' + (width-170) / 2 + ',' + (height+210) / 2 + ')');

    svg.append('text')
        .text('Medium')
        .attr("class", "label-text")
        .style("fill", "#F5A622")
        .attr('text-anchor', 'middle')
        .attr("transform", 'translate(' + (width) / 2 + ',' + (height+210) / 2 + ')');

    svg.append('text')
        .text('Low')
        .attr("class", "label-text")
        .style("fill", "#F8E71C")
        .attr('text-anchor', 'middle')
        .attr("transform", 'translate(' + (width+170) / 2 + ',' + (height+210) / 2 + ')');


    svg.append('text')
        .text('$16m')
        .attr("class", "middle-text")
        .attr('text-anchor', 'middle')
        .attr("transform", 'translate(' + width / 2 + ',' + (height+10) / 2 + ')');

    svg.append('text')
        .text("5%")
        .attr("class", "middle-text-2")
        .style("fill", "#D00017")
        .attr('text-anchor', 'middle')
        .attr("transform", 'translate(' + (width+30) / 2 + ',' + (height+80) / 2 + ')');

    svg.append("svg:image")
        .attr('x', -22)
        .attr('y', -33)
        .attr('width', 23)
        .attr('height', 45)
        .attr("xlink:href", uparrowred)
        .attr("transform", 'translate(' + (width-21) / 2 + ',' + (height+80) / 2 + ')');

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