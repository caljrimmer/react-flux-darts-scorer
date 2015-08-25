//Lib
import React from 'react';
import ReactDOM from 'react-dom';
import Charts from '../../custom/Charts';

var FormChart = React.createClass({

    componentDidMount: function() {
        var el = ReactDOM.findDOMNode(this);
        Charts.block(this.props.collection.toJSON(),el);
    },

    render: function() {
        return (
            <div className="chart"></div>
        );
    }

});

export default FormChart;