export default (response, open, close, input_data) => {

    let high = response["2. high"];
    let low = response["3. low"];
    let high_node = `<span>High: ${high}</span>`
    let low_node = `<span>Low: ${low}</span>`
    let class_name = `.${input_data}`

    document.querySelector(class_name).insertAdjacentHTML("beforeend", low_node)
    let svg = d3.select(class_name)
        .append("svg")
        .attr("class", "visualize")
        .attr("height", "17px")
        .attr("width", "100px")
        .style('background', 'yellow');
    let x = d3.scaleLinear()
        .domain([low, high])
        .range([0, 100])

    svg.append("line")
        .attr("x1", x(close))
        .attr("x2", x(close))
        .attr("y1", 0)
        .attr("y2", 17)
        .attr("style", "stroke:rgb(255,0,0);stroke-width:2")

    document.querySelector(class_name).insertAdjacentHTML("beforeend", high_node)
}
