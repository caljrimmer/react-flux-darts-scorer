//Lib
import React from 'react';

var GameRow = React.createClass({
    render: function() {
        var row = this.props.data;

        var darts = function(data){
            if(data){
                return (
                    <td>
                        <div className="dart_score">
                            <h2>{data.desc}</h2>
                            <p>{data.score}</p>
                        </div>
                    </td>
                );
            }
        };

        return (
            <tr>
                <td key={'score-' + row.score}><div className="score_total">{row.score}</div></td>
                {darts(row.darts[0])}
                {darts(row.darts[1])}
                {darts(row.darts[2])}
            </tr>
        );
    }
});


export default GameRow;