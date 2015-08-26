//Lib
import React from 'react';
import _ from 'underscore';
import timeago from 'timeago';

//Shared
import BackboneMixin from '../../../mixins/BackboneMixin';
import AppActions from '../../../actions/AppActions';

var HistoryRow = React.createClass({

    mixins: [BackboneMixin],

    countAchievements : function(ach){
        var achArray = [];
        _.each(ach,function(v,k){
            if(v>0 && !( k==="checkout" || k==="highest3d")){
                achArray.push(k)
            }
            if(k==="checkout" && v > 49){
                achArray.push( k + ' was ' + v);
            }
        });
        return achArray;
    },

    eventDeleteRow : function(e) {
        e.preventDefault();
        AppActions.deleteGame(this.props.data);
    },

    render: function () {
        var row = this.props.model;
        var achArray = this.countAchievements(row.get('achievements'));
        return (
            <tr>
                <td>{timeago(row.get('gameEnd'))}</td>
                <td id="history_ach">
                    <span className={achArray.length > 0 ? 'on extra_space' : 'extra_space' }>{ achArray.length + ' Achievements'}</span>
                </td>
                <td>
                    <a className="showGame" href={'#game/' + row.get('id')}>{row.get('ave')}</a>
                </td>
                <td>
                    <span className="button but_red but_small" onClick={this.eventDeleteRow}>x</span>
                </td>
            </tr>
        );
    }

});

export default HistoryRow;