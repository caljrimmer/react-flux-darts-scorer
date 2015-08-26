//Lib
import React from 'react';
import AppActions from '../../actions/AppActions';
import BackboneMixin from '../../mixins/BackboneMixin'

var SaveButton = React.createClass({

    mixins : [BackboneMixin],

    eventSave: function(e){
        e.preventDefault();
        AppActions.saveGame(this.props.model);
    },

    eventDelete: function(e){
        e.preventDefault();
        AppActions.newGame();
    },

    render: function() {

        var model = this.props.model;

        return (
            <div className={model.get('score') !== 0 ? 'controls clearfix  hide' : 'controls clearfix'}>
                    <a className="button but_green" onClick={this.eventSave}>Save Game</a>
                    <a className="button but_red" onClick={this.eventDelete}>Delete Game</a>
            </div>
        );
    }
});


export default SaveButton;