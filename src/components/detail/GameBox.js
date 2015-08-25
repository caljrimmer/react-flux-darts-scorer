//Lib
import React from 'react';

//Partials
import GameRow from './game/GameRow';

//Shared
import BackboneMixin from '../../mixins/BackboneMixin';

var GameBox = React.createClass({

    mixins : [BackboneMixin],

    render: function() {

        var Rows = this.props.model.get('rounds').map(function(row){
            return (
                <GameRow data={row} />
            );
        });

        return (
            <table className="dart_scoring">
                <tbody>
                {Rows}
                </tbody>
            </table>
        );
    }
});


export default GameBox;