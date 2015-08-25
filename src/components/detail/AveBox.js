//Lib
import React from 'react';

//Shared
import BackboneMixin from '../../mixins/BackboneMixin';

var AveBox = React.createClass({

    mixins : [BackboneMixin],

    render: function() {
        var model = this.props.model;
        return (
            <div id="scorer_info">
                <p id="average">Ave : <span>{ model.get('ave') }</span></p>
                <p id="total">Num : <span>{ model.get('numberDarts') }</span></p>
            </div>
        );
    }

});


export default AveBox;