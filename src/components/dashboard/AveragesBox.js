//Lib
import React from 'react';
import _ from 'underscore';

//Shared
import BackboneMixin from '../../mixins/BackboneMixin';

var AveragesBox = React.createClass({

    mixins : [BackboneMixin],

    getInitialState: function(){
        this.props.model.buildRecord();
        return null;
    },

    render: function() {
        var model = this.props.model;
        //Props defined in Dashboard.js
        return (
            <div className="wrapper">
                <div className="johnsonbox">
                    <ul className="left">
                        <li><span className="label">No. of Games</span><span className="special_record">{model.get('games')}</span></li>
                        <li><span className="label">Highest 3 Darts</span><span className="special_record">{model.get('highest3d')}</span></li>
                        <li><span className="label">Highest Checkout</span><span className="special_record">{model.get('bestCheckout')}</span></li>
                        <li>
                            <span className="label">180's</span><span>{model.get('oneEighty')}</span>
                            <span className="label">140's</span><span className="special_record">{model.get('oneForty')}</span>
                        </li>
                        <li>
                            <span className="label">120's</span><span>{model.get('oneTwenty')}</span>
                            <span className="label">100's</span><span className="special_record">{model.get('oneHundred')}</span>
                        </li>
                    </ul>
                    <h2>{model.get('ave')}</h2>
                    <p>Ave. per 3 Darts (last 30)</p>
                    <ul className="right">
                        <li><span className="label">Least Throws</span><span className="special_record">{model.get('leastDarts')}</span></li>
                        <li><span className="label">Best Average</span><span className="special_record">{model.get('bestAve')}</span></li>
                    </ul>
                </div>
            </div>
        );
    }

});


export default AveragesBox;