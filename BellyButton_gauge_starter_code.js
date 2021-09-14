// DELIVERABLE 3 - Gauge Graph
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var filteredMeta = metadata.filter(metaID => metaID.id == sample);
    // console.log(filteredMeta);

    // DONE - Create a variable that holds the first sample in the array.
    // 2. Create a variable that holds the first sample in the metadata array.
    var firstMeta = filteredMeta[0];
    //console.log(firstMeta);
    // DONE - Create variables that hold the otu_ids, otu_labels, and sample_values.

    // // 3. Create a variable that holds the washing frequency.
    var wfreq = parseFloat(firstMeta.wfreq);

    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
        type: "indicator",
        mode: "gauge+number+delta",
        value: wfreq,
        title: {text:"<b>Belly Button Washing Frequency</b><br>Scrubs per Week"},
        gauge: {
          axis: { range: [null, 10], tickwidth: 1, tickcolor: "black" },
          bar: {color:"black"},
          steps: [
            {range: [0,2],color: "red"},
            {range: [2,4],color: "orange"},
            {range: [4,6],color: "yellow"},
            {range: [6,8],color: "mediumseagreen"},
            {range: [8,10],color: "green"},
          ],
        }
      }];
    
    // // 5. Create the layout for the gauge chart.
    // var gaugeLayout = { 
     
    // };
    Plotly.newPlot("gauge",gaugeData);

  });
}
