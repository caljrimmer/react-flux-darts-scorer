//Lib
import React from 'react';

//Shared
import AppActions from '../../actions/AppActions';

var ScoreButton = React.createClass({


    render: function() {
        return (
            <div className="white_wrapper wrapper">
                <a className="link_but button but_green" href="#scorer">Score a Game</a>
            </div>
        );
    }

});

export default ScoreButton;