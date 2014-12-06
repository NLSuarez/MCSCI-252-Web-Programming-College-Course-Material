/*
Name: Stefan Suarez
Final draft: 10/15/2014
Assignment: Lab5
Description: See histogram.html.
Note: Some of the comments in here are stuff I attempted but couldn't get to work.
Most of it was me trying to see if I could rearrange the program to have the x-axis
up at the top and make the y-axis count down. In effect, it would recenter the graph
from bottom-left to top-right. It proved more challenging than anticipated, though.
*/

var width = 900,
    height = 700,
    pad = 40, 
    left_pad = 100;
    //right_pad = 100;
//X scale altered.
var x = d3.scale.ordinal().rangeRoundBands([left_pad, width-pad], 0.1);
var y = d3.scale.linear().range([height-pad, pad]);

/*
Attempt at recentering graph to top right
var x = d3.scale.ordinal().rangeBoundBands([pad, width-right_pad], 0.06);
var y = d3.scale.linear().range([pad, height-pad]);
*/

/*
Originally used to make the labels appear underneath the x-axis
instead of above it.
var xAxis = d3.svg.axis().scale(x).orient("bottom");
*/

var xAxis = d3.svg.axis().scale(x).orient("top");
var yAxis = d3.svg.axis().scale(y).orient("left");

var svg = d3.select("#graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

d3.json('histogram-hours.json', function (data) {

    data = d3.keys(data).map(function (key) {
        return {bucket: Number(key),
                N: data[key]};
    });

    x.domain(data.map(function (d) { return d.bucket; }));
    //Original code.
    //y.domain([0, d3.max(data, function (d) { return d.N; })]);
    
    //Here is where I rearrange the code to have the y-axis count
    //down instead of up.
    y.domain([d3.max(data, function(d) { return d.N; }), 0]);

    svg.append("g")
        .attr("class", "axis")
        //Original code before I reversed the position of the x-axis.
        //.attr("transform", "translate(0, "+(height-pad)+")")
        .attr("transform", "translate(0, "+(pad)+")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate("+(left_pad-pad)+", 0)")
        //Attempt at repositioning the y-axis to the right.
        //.attr("transform", "translate("+(right_pad-pad)+", 0)")
        .call(yAxis);

    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        //These next 5 lines of code state the beginning, static
        //values of the rectangles before the animation takes place.
        .attr('x', function (d) { return x(d.bucket)+100; })
        .attr('width', x.rangeBand())
        .attr('y', 0)
        .attr('rx', 20)
        .attr('ry', 30)
        //Beyond this point is where I played with the animations.
        .transition()
        .delay(function (d) { return d.bucket*50; })
        .duration(1500)
        .attr('y', pad)
        .attr('x', function (d) { return x(d.bucket); })
        //.attr('height', function (d) { return height-pad - y(d.N); });
        .attr('height', function (d) { return y(d.N); });

});
