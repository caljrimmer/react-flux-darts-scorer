//Lib
import React from 'react';

var NavBox = React.createClass({
    render: function() {
        return (
            <div id="nav_topbar">
                <div id="nav_topbar_content" className="clearfix">
                    <a className="button but_medium but_green fl" href="#dashboard">Dashboard</a>
                    <a className="button but_medium but_green fl" href="#scorer">Score a Game</a>
                    <a className="button but_medium but_green fl" href="#stats">Stats</a>
                </div>
            </div>
        );
    }
});


export default NavBox;