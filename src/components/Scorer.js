//Lib
import React from 'react';
import _ from 'underscore';

//Shared
import Nav from './shared/Nav';
import BackboneMixin from '../mixins/BackboneMixin'

//Partials
import GraphicScorer from './scorer/GraphicScorer';
import SaveButton from './scorer/SaveButton';
import GameBox from './detail/GameBox';
import AveBox from './detail/AveBox';

var Scorer = React.createClass({

    mixins : [BackboneMixin],

    render: function() {

        var model = this.props.model;
        var collection = this.props.collection;

        return (
            <div>
                <Nav />
                <div className="score_wrapper">
                    <div id="scorer" className="clearfix">

                        <SaveButton model={model} />
                        <GraphicScorer model={model} collection={collection} />

                        <div className="border-divide noheight clear"></div>

                        <GameBox model={model} />

                        <div className="border-divide noheight clear"></div>
                        <AveBox model={model} />

                    </div>
                </div>
            </div>
        );
    }
});

export default Scorer;