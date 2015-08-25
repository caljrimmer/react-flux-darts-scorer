import React from 'react';
import ReactDOM from 'react-dom';

var AchievementsBox = React.createClass({

    render: function() {
        var model = this.props.model;
        return (
            <div id="achievements">
                <table cellSpacing="0" cellPadding="0" className="tb_body">
                    <tbody>
                        <tr className="tb_subheader">
                            <th>Label</th>
                            <th>Achievements</th>
                        </tr>
                        <tr className="alt">
                            <td>20s</td>
                            <td>
                                <span className={model.get('oneHundred') >0  ? 'on' : '' }>100</span>
                                <span className={model.get('oneTwenty') >0  ? 'on' : '' }>120</span>
                                <span className={model.get('oneForty') >0  ? 'on' : '' }>140</span>
                                <span className={model.get('oneEighty') >0 ? 'on' : '' }>180</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Bulls</td>
                            <td>
                                <span className={model.get('greeneye') >0  ? 'on' : '' }>GreenEye</span>
                                <span className={model.get('bullseye') >0  ? 'on' : '' }>BullEye</span>
                            </td>
                        </tr>
                        <tr className="alt">
                            <td>Grouping</td>
                             <td>
                                <span className={model.get('singles') >0 ? 'on' : '' }>Singles</span>
                                <span className={model.get('doubles') >0 ? 'on' : '' }>Doubles</span>
                                <span className={model.get('triples') >0 ? 'on' : '' }>Triples</span>
                             </td>
                        </tr>
                        <tr>
                            <td>Darters</td>
                            <td>
                                <span className={ (model.get('leastDarts') < 25 && model.get('leastDarts') !== 0) ? 'on' : '' }>D24</span>
                                <span className={ (model.get('leastDarts') < 22 && model.get('leastDarts') !== 0) ? 'on' : '' }>D21</span>
                                <span className={ (model.get('leastDarts') < 19 && model.get('leastDarts') !== 0) ? 'on' : '' }>D18</span>
                                <span className={ (model.get('leastDarts') < 16 && model.get('leastDarts') !== 0) ? 'on' : '' }>D15</span>
                                <span className={ (model.get('leastDarts') < 13 && model.get('leastDarts') !== 0) ? 'on' : '' }>D12</span>
                                <span className={ (model.get('leastDarts') < 10 && model.get('leastDarts') !== 0) ? 'on' : '' }>D9</span>
                            </td>
                        </tr>
                        <tr className="alt">
                            <td>Checkout</td>
                            <td>
                                <span className={model.get('bestCheckout') > 49 ? 'on' : '' }>C50</span>
                                <span className={model.get('bestCheckout') > 74 ? 'on' : '' }>C75</span>
                                <span className={model.get('bestCheckout') > 99 ? 'on' : '' }>C100</span>
                                <span className={model.get('bestCheckout') > 124 ? 'on' : '' }>C125</span>
                                <span className={model.get('bestCheckout') > 149 ? 'on' : '' }>C150</span>
                                <span className={model.get('bestCheckout') > 169 ? 'on' : '' }>C170</span>
                            </td>
                        </tr>
                        <tr>
                            <td>Special</td>
                            <td>
                                <span className={model.get('shanghai') > 0 ? 'on' : '' }>Shanghai</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

});

export default AchievementsBox;