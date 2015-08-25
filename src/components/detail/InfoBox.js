//Lib
import React from 'react';

var InfoBox = React.createClass({
    render: function() {
        var model = this.props.model;
        var duration = Math.ceil((new Date(model.get('gameEnd')).getTime() - new Date(model.get('gameStart')).getTime())/1000);
        return (
            <div id="gameDetails">
                <ul>
                    <li>Start : <b>{model.get('gameStart')}</b></li>
                    <li>Finish : <b>{model.get('gameEnd')}</b></li>
                    <li>Duration : <b>{duration} secs</b></li>
                </ul>
            </div>
        );
    }
});


export default InfoBox;