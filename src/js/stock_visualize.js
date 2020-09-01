export default (response, class_name) => {
    console.log("stock visualize-working", response)

    let parseDate = d3.timeParse('%Y-%m-%d')
    let data = Object.entries(response).map(item => [parseDate(item[0]), +item[1]["4. close"]])

    class_name = `.${class_name}`;

    let margin = {
        left: 100,
        right: 10,
        top: 10,
        bottom: 100
    }

    let width = 600 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    let svg = d3.select(class_name)
        .append('svg')
        .attr('width', 600)
        .attr('height', 400)
        .style('background', '#f4f000');

    let g = svg.append('g')
        .attr('width', width)
        .attr('height', height)
        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

    //scales
    let x = d3.scaleTime()
        .domain(d3.extent(data, (item) => (item[0])))
        .range([0, width])

    let y = d3.scaleLinear()
        .domain(d3.extent(data, (item => item[1])))
        .range([height, 0])

    //Axis
    let xAxis = d3.axisBottom(x);
    g.append('g')
        .attr('transform', 'translate(' + 0 + ',' + height + ')')
        .call(xAxis);

    let yAxis = d3.axisLeft(y);
    g.append('g')
        .call(yAxis);

    let line = d3.line()
        .x(item => x(item[0]))
        .y(item => y(item[1]))

    g.append("path")
        .attr("class", "line")
        .attr("fill", "none")
        .attr("stroke", "grey")
        .attr("stroke-width", "2px")
        .attr("d", line(data));

}