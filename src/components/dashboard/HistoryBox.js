//Lib
import React from 'react';
import _ from 'underscore';

//Shared
import BackboneMixin from '../../mixins/BackboneMixin';

//Partials
import HistoryRow from './history/HistoryRow';

var HistoryBox = React.createClass({

    mixins : [BackboneMixin],

    render: function() {

        var Rows = this.props.collection.map(function(row){
            return (
                <HistoryRow key={row.get('id')} data={row} />
            );
        });

        return (
            <div id="history">
                <table cellSpacing="0" cellPadding="0" className="tb_body">
                    <tbody>
                        <tr className="tb_subheader">
                            <th>When</th>
                            <th>Achievements</th>
                            <th>Ave</th>
                            <th></th>
                        </tr>
                        { Rows }
                    </tbody>
                </table>
            </div>
        );
    }

});


export default HistoryBox;