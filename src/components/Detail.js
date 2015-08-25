//Lib
import React from 'react';
import _ from 'underscore';

//Shared
import Nav from './shared/Nav';
import Lang from './shared/Lang';

//Partials
import InfoBox from './detail/InfoBox';
import GameBox from './detail/GameBox';
import AveBox from './detail/AveBox';

var Details = React.createClass({
    render: function() {
        var model = this.props.collection.find({id:this.props.modelID});
        return (
            <div>
                <Nav />
                <div id="gameDetail" className="clearfix">

                    <InfoBox model={model} />
                    <div className="border-divide noheight clear"></div>

                    <GameBox model={model} />

                    <div className="border-divide noheight clear"></div>
                    <AveBox model={model} />

                </div>
            </div>
        );
    }
});

export default Details;