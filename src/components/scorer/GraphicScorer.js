//Lib
import React from 'react';
import ReactDOM from 'react-dom';

import AppActions from '../../actions/AppActions';
import BackboneMixin from '../../mixins/BackboneMixin'


var GraphicScorer = React.createClass({

    mixins : [BackboneMixin],

    previousDart : "",

    eventDartSelect : function(e){
        var id = e.target.id;

        var parse = id.replace('dart','');
        if(isNaN(parseInt(parse,10))){
            if(parse.indexOf('geye') !== -1){
                parse = "25";
            }
            if(parse.indexOf('beye') !== -1){
                parse = "50";
            }
            if(parse.indexOf('double') !== -1){
                parse = "d";
            }
            if(parse.indexOf('treble') !== -1){
                parse = "t";
            }
            if(parse.indexOf('miss') !== -1){
                parse = "0";
            }
        }

        //Only Action if not double or treble
        if(parse === "d" || parse === "t"){
            this.previousDart = parse;
        }else{
            parse = this.previousDart + parse;
            this.previousDart = "";
            AppActions.scoreDart(parse);
        }

    },

    render: function() {

        var model = this.props.model;

        return (
            <div id="graphicScorerNew" className={model.get('score') === 0 ? 'scoringInput clearfix hide' : 'scoringInput clearfix'}>
                <ul onClick={this.eventDartSelect}>
                    <li id="dart1" className="small white">1</li>
                    <li id="dart2" className="small black">2</li>
                    <li id="dart3" className="small black">3</li>
                    <li id="dart4" className="small white">4</li>
                    <li id="dart5" className="small white">5</li>
                    <li id="dart6" className="small white">6</li>
                    <li id="dart7" className="small black">7</li>
                    <li id="dart8" className="small black">8</li>
                    <li id="dart9" className="small white">9</li>
                    <li id="dart10" className="small black">10</li>
                    <li id="dart11" className="small white">11</li>
                    <li id="dart12" className="small black">12</li>
                    <li id="dart13" className="small black">13</li>
                    <li id="dart14" className="small black">14</li>
                    <li id="dart15" className="small white">15</li>
                    <li id="dart16" className="small white">16</li>
                    <li id="dart17" className="big white">17</li>
                    <li id="dart18" className="big black">18</li>
                    <li id="dart19" className="big white">19</li>
                    <li id="dart20" className="big black">20</li>
                    <li id="dartgeye1" className="geye">G-Eye</li>
                    <li id="dartbeye" className="beye">B-Eye</li>
                    <li id="dartgeye2" className="geye">G-Eye</li>
                    <li id="dartdouble" className="double">Double</li>
                    <li id="darttreble" className="treble">Treble</li>
                    <li id="dartmiss" className="miss">Miss</li>
                </ul>
            </div>
        );
    }
});


export default GraphicScorer;