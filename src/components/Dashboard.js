//Lib
import React from 'react';
import _ from 'underscore';

//Shared
import Nav from './shared/Nav';
import Lang from './shared/Lang';

//Partials
import AveragesBox from './dashboard/AveragesBox';
import HistoryBox from './dashboard/HistoryBox';
import ScoreButton from './dashboard/ScoreButton';

var DashboardBox = React.createClass({
    render: function() {
        var gamesStore = this.props.collection;
        var recordStore = this.props.model;
        return (
            <div>
                <Nav />
                <div className="logo-container"><img src="images/logo.png" /></div>
                <div id="maincontent">
                    <ScoreButton />
                    <AveragesBox model={recordStore} collection={gamesStore} />
                    <HistoryBox collection={gamesStore} />
                </div>
            </div>
        );
    }
});

export default DashboardBox;