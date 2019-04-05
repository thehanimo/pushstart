import * as d3 from "d3";

export default function drawLineChart(id,width){
    var lineData = [];
    lineData.push({date:null, nps:120});
    lineData.push({date:new Date(2019, 1, 27), nps:110});
    lineData.push({date:new Date(2019, 1, 28), nps:104});
    lineData.push({date:new Date(2019, 2, 1), nps:210});
    lineData.push({date:new Date(2019, 2, 2), nps:315});
    lineData.push({date:new Date(2019, 2, 3), nps:205});
    lineData.push({date:new Date(2019, 2, 4), nps:300});
    lineData.push({date:new Date(2019, 2, 5), nps:180});
    lineData.push({date:new Date(2019, 2, 6), nps:400});
    lineData.push({date:new Date(2019, 2, 7), nps:320});
    lineData.push({date:new Date(2019, 2, 8), nps:315});
    lineData.push({date:new Date(2019, 2, 9), nps:305});
    lineData.push({date:new Date(2019, 2, 10), nps:205});
    lineData.push({date:new Date(2019, 2, 11), nps:265});
    lineData.push({date:new Date(2019, 2, 12), nps:230});
    lineData.push({date:new Date(2019, 2, 13), nps:125});
    lineData.push({date:new Date(2019, 2, 14), nps:220});
    lineData.push({date:new Date(2019, 2, 15), nps:270});
    lineData.push({date:new Date(2019, 2, 16), nps:310});
    lineData.push({date:new Date(2019, 2, 17), nps:270});
    lineData.push({date:new Date(2019, 2, 18), nps:210});
    lineData.push({date:new Date(2019, 2, 19), nps:240});
    lineData.push({date:new Date(2019, 2, 20), nps:250});
    lineData.push({date:new Date(2019, 2, 21), nps:220});

    var lineData2 = [];
    lineData2.push({date:new Date(2019, 1, 27), nps:50});
    lineData2.push({date:new Date(2019, 1, 28), nps:10});
    lineData2.push({date:new Date(2019, 2, 1), nps:20});
    lineData2.push({date:new Date(2019, 2, 2), nps:90});
    lineData2.push({date:new Date(2019, 2, 3), nps:70});
    lineData2.push({date:new Date(2019, 2, 4), nps:40});
    lineData2.push({date:new Date(2019, 2, 5), nps:300});
    lineData2.push({date:new Date(2019, 2, 6), nps:110});
    lineData2.push({date:new Date(2019, 2, 7), nps:200});
    lineData2.push({date:new Date(2019, 2, 8), nps:280});
    lineData2.push({date:new Date(2019, 2, 9), nps:200});
    lineData2.push({date:new Date(2019, 2, 10), nps:115});
    lineData2.push({date:new Date(2019, 2, 11), nps:90});
    lineData2.push({date:new Date(2019, 2, 12), nps:100});
    lineData2.push({date:new Date(2019, 2, 13), nps:80});
    lineData2.push({date:new Date(2019, 2, 14), nps:85});
    lineData2.push({date:new Date(2019, 2, 15), nps:70});
    lineData2.push({date:new Date(2019, 2, 16), nps:90});
    lineData2.push({date:new Date(2019, 2, 17), nps:130});
    lineData2.push({date:new Date(2019, 2, 18), nps:380});
    lineData2.push({date:new Date(2019, 2, 19), nps:130});
    lineData2.push({date:new Date(2019, 2, 20), nps:135});
    lineData2.push({date:new Date(2019, 2, 21), nps:140});




    lineData.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    });
    lineData2.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    });



    var height  = 230;

    var margin = {top: 20, right: 15, bottom: 50, left: 35};

    width =     width - margin.left - margin.right;
    height =    height - margin.top - margin.bottom;

    var svg = d3.select(id).append("svg")
      .attr("width",  width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // set the ranges
    var x = d3.scaleTime().range([50, width]);
      
    x.domain(d3.extent(lineData, function(d) { return d.date; }));


    var y = d3.scaleLinear().range([height, 0]);


    y.domain([0,500]);

    var valueline = d3.line()
            .x(function(d) { return d.date? x(d.date) : null; })
            .y(function(d) { return y(d.nps);  })

    var valueline1 = d3.line()
            .x(function(d) { return d.date? x(d.date) : null; })
            .y(function(d) { return 1;  })
    var valueline2 = d3.line()
            .x(function(d) { return d.date? x(d.date) : null; })
            .y(function(d) { return 33;  })
    var valueline3 = d3.line()
            .x(function(d) { return d.date? x(d.date) : null; })
            .y(function(d) { return 65;  })
    var valueline4 = d3.line()
            .x(function(d) { return d.date? x(d.date) : null; })
            .y(function(d) { return 97;  })
    var valueline5 = d3.line()
            .x(function(d) { return d.date? x(d.date) : null; })
            .y(function(d) { return 129;  })
    var valueline6 = d3.line()
            .x(function(d) { return d.date? x(d.date) : null; })
            .y(function(d) { return 160;  })
    svg.append("path")
        .data([lineData]) 
        .attr("class", "line")  
        .attr("d", valueline); 
    svg.append("path")
        .data([lineData2]) 
        .attr("class", "line2")  
        .attr("d", valueline); 


    svg.append("path")
        .data([lineData]) 
        .attr("class", "yline")  
        .attr("d", valueline1);
    svg.append("path")
        .data([lineData]) 
        .attr("class", "yline")  
        .attr("d", valueline2)
    svg.append("path")
        .data([lineData]) 
        .attr("class", "yline")  
        .attr("d", valueline3)
    svg.append("path")
        .data([lineData]) 
        .attr("class", "yline")  
        .attr("d", valueline4)
    svg.append("path")
        .data([lineData]) 
        .attr("class", "yline")  
        .attr("d", valueline5)
    svg.append("path")
        .data([lineData]) 
        .attr("class", "yline")  
        .attr("d", valueline6)
    //  var xAxis_woy = d3.axisBottom(x).tickFormat(d3.timeFormat("Week %V"));
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    function isLastDay(dt) {
      return new Date(dt.getTime() + 86400000).getMonth() !== dt.getMonth();
    }
    function isFirstDay(dt) {
      return new Date(dt.getTime() - 86400000).getMonth() !== dt.getMonth();
    }
    var xAxis_woy = d3.axisBottom(x).ticks().tickFormat(d3.timeFormat("%d")).tickValues(lineData.slice(1).map(d=>d.date));
    var xAxis_woy1 = d3.axisBottom(x).ticks(24).tickFormat((d) => {
      if(isLastDay(d) || isFirstDay(d)){
        return monthNames[d.getMonth()]
      } else{
        return null;
      }
    });

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis_woy);
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + 180 + ")")
        .call(xAxis_woy1);

    //  Add the Y Axis
    //  svg.append("g").call(d3.axisLeft(y));

    svg.selectAll(".dot")
        .data(lineData.slice(1))
        .enter()
        .append("circle") // Uses the enter().append() method
        .attr("class", "dot") // Assign a class for styling
        .attr("cx", function(d) { return x(d.date) })
        .attr("cy", function(d) { return y(d.nps) })
        .attr("r", 5)
        .on('mouseover', function(d){
          d3.select('body').select("div.me").remove()
          d3.select(this)
            .style("fill","#249CDB");
            var div = d3.select('body').append("div")
            .attr("class","me")
            .style("left", x(d.date) + 5 + "px")
            .style("top", y(d.nps) - 20 + "px")
            div.append('p')
            .attr('class','graphHead')
            .text(formatDate(d.date))
            .exit()
            div.append('p')
            .attr('class','graphVal')
            .style('color','#249CDB')
            .text(d.nps)
            div.append('p')
            .attr('class','graphLabel')
            .text('Incoming data')
            div.append('p')
            .attr('class','graphVal')
            .style('color','#78DDFC')
            .text(lineData2[lineData.indexOf(d)].nps)
            div.append('p')
            .attr('class','graphLabel')
            .text('Data errors')

        })
        .on("mouseout", function(d) {
            d3.select(this).style("fill", "#ffffff")
            d3.select('body').select("div.me").style('visibility','hidden').style('opacity',0)         
        });

        
    svg.selectAll(".dot2")
        .data(lineData2)
        .enter()
        .append("circle") // Uses the enter().append() method
        .attr("class", "dot2") // Assign a class for styling
        .attr("cx", function(d) { return x(d.date) })
        .attr("cy", function(d) { return y(d.nps) })
        .attr("r", 5)
        .on('mouseover', function(d){
          d3.select('body').select("div.me").remove()
          d3.select(this)
          .style("fill","#78DDFC");
          var div = d3.select('body').append("div")
          .attr("class","me")
          .style("left", x(d.date) + 5 + "px")
          .style("top", y(d.nps) - 20 + "px")
          div.append('p')
          .attr('class','graphHead')
          .text(formatDate(d.date))
          .exit()
          div.append('p')
          .attr('class','graphVal')
          .style('color','#249CDB')
          .text(lineData[lineData2.indexOf(d)].nps)
          div.append('p')
          .attr('class','graphLabel')
          .text('Incoming data')
          div.append('p')
          .attr('class','graphVal')
          .style('color','#78DDFC')
          .text(d.nps)
          div.append('p')
          .attr('class','graphLabel')
          .text('Data errors')

      })
      .on("mouseout", function() {
          d3.select(this).style("fill", "#ffffff")
          d3.select('body').select("div.me").style('visibility','hidden').style('opacity',0) 
      });

    svg.append('g')
      .classed('y axis', true)
      .call(d3.axisLeft(y).ticks(5));


    function formatDate(date) {
      var monthNames = [
        "Jan.", "Feb.", "Mar.",
        "April", "May", "June", "July",
        "Aug.", "Sept.", "Oct.",
        "Nov.", "Dec."
      ];

      var day = date.getDate();
      var monthIndex = date.getMonth();
      var year = date.getFullYear();

      return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
    var legend = d3.arc()
        .innerRadius(5)
        .outerRadius(5)
        .startAngle(0)
        .endAngle(8);
    var header = d3.select('#ghost').append('svg').attr('width','100%')
    header
        .append("path")
        .style("stroke-width", "3px")
        .style("stroke", "#249CDB")
        .attr("d", legend)
        .attr("transform", 'translate(' + (width-922) + ',' + 15 + ')');
    header.append('text')
        .text("Incoming data")
        .attr("class", "line-graph-legend")
        .attr('text-anchor', 'middle')
        .style("fill", "#249CDB")
        .attr("transform", 'translate(' + (width-870) + ',' + 20 + ')');

    header.append("path")
        .style("stroke-width", "3px")
        .style("stroke", "#78DDFC")
        .attr("d", legend)
        .attr("transform", 'translate(' + (width-773) + ',' + 15 + ')');
    header.append('text')
        .text("No. of errors detected")
        .attr("class", "line-graph-legend")
        .attr('text-anchor', 'middle')
        .style("fill", "#78DDFC")
        .attr("transform", 'translate(' + (width-700) + ',' + 20 + ')');
    header.append("path")
        .style("stroke-width", "3px")
        .style("stroke", "#9C9C9C")
        .attr("d", legend)
        .attr("transform", 'translate(' + (width-582) + ',' + 15 + ')');
    header.append('text')
        .text("No. of errors fixed")
        .attr("class", "line-graph-legend")
        .attr('text-anchor', 'middle')
        .style("fill", "#9C9C9C")
        .attr("transform", 'translate(' + (width-520) + ',' + 20 + ')');
    header.append("path")
        .style("stroke-width", "3px")
        .style("stroke", "#9C9C9C")
        .attr("d", legend)
        .attr("transform", 'translate(' + (width-412) + ',' + 15 + ')');
    header.append('text')
        .text("No. of errors unassigned")
        .attr("class", "line-graph-legend")
        .attr('text-anchor', 'middle')
        .style("fill", "#9C9C9C")
        .attr("transform", 'translate(' + (width-330) + ',' + 20 + ')');
    header.append("path")
        .style("stroke-width", "3px")
        .style("stroke", "#9C9C9C")
        .attr("d", legend)
        .attr("transform", 'translate(' + (width-205) + ',' + 15 + ')');
    header.append('text')
        .text("No. of errors assigned")
        .attr("class", "line-graph-legend")
        .attr('text-anchor', 'middle')
        .style("fill", "#9C9C9C")
        .attr("transform", 'translate(' + (width-130) + ',' + 20 + ')');

  }