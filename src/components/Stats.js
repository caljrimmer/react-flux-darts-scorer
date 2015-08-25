//Lib
import React from 'react';
import _ from 'underscore';

//Shared
import Nav from './shared/Nav';
import Lang from './shared/Lang';

//Partials
import FormChart from './stats/FormChart';
import BarChart from './stats/BarChart';
import AchievementsBox from './stats/AchievementsBox';

var StatsBox = React.createClass({
    render: function() {
        var collection = this.props.collection;
        var model = this.props.model;
        return (
            <div>
                <Nav />
                <BarChart collection={collection} />
                <FormChart collection={collection} />
                <AchievementsBox model={model} />
            </div>
        );
    }
});

export default StatsBox;