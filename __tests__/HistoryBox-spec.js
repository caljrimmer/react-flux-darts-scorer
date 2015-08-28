import React from 'react/addons';
import Backbone from 'backbone';
var TestUtils = React.addons.TestUtils;

//Stores
import GamesStore from '../src/store/GamesStore';
import LocalStorage from '../src/custom/LocalStorage';

//Components
import HistoryBox from '../src/components/dashboard/HistoryBox';
import HistoryRow from '../src/components/dashboard/history/HistoryRow';

jest.dontMock('../src/components/dashboard/HistoryBox');
jest.dontMock('../src/components/dashboard/history/HistoryRow');

var history;
var rows;
var ach;
var ave;
var button;

var data = [{
    gameStart: new Date('2015-08-26T13:52:40.073Z'),
    gameEnd: new Date('2015-08-26T14:52:40.073Z'),
    ave: 90.00,
    type: 501,
    score: 0,
    achievements: {
        checkout: 1,
        highest3d: 0,
        oneEighty: 0,
        oneForty: 1,
        oneTwenty: 0,
        oneHundred: 0,
        greeneye: 0,
        bullseye: 1,
        singles: 0,
        doubles: 0,
        trebles: 0,
        shanghai: 1
    }},
    {
    gameStart: new Date('2015-08-26T14:52:40.073Z'),
    gameEnd: new Date('2015-08-26T15:52:40.073Z'),
    ave: 100.00,
    type: 501,
    score: 0,
    achievements: {
        checkout: 0,
        highest3d: 0,
        oneEighty: 0,
        oneForty: 1,
        oneTwenty: 0,
        oneHundred: 0,
        greeneye: 0,
        bullseye: 0,
        singles: 0,
        doubles: 0,
        trebles: 0,
        shanghai: 1
    }
}];

describe('HistoryBox', function() {

    beforeEach(function(){

        GamesStore.set(data);

        window.localStorage= {
            games : LocalStorage.parseToLocalStorage(GamesStore)
        };

        history = TestUtils.renderIntoDocument(
            <HistoryBox collection={GamesStore} />
        );

        ave = TestUtils.scryRenderedDOMComponentsWithClass(history, 'showGame');
        ach = TestUtils.scryRenderedDOMComponentsWithClass(history, 'extra_space');
        rows = TestUtils.scryRenderedDOMComponentsWithTag(history, 'tr');
        button = TestUtils.scryRenderedDOMComponentsWithClass(history, 'but_red');

    });

    it('Render Game Rows', function() {
        expect(rows.length).toEqual(3);
    });

    it('Average Displayed', function(){
        expect(ave.length).toEqual(2);
        expect(ave[0].textContent).toEqual('100');
        expect(ave[1].textContent).toEqual('90');
    });

    it('Achievements Displayed', function(){
        expect(ach.length).toEqual(2);
        expect(ach[0].textContent).toEqual('2 Achievements');
        expect(ach[1].textContent).toEqual('3 Achievements');
    });

    it('Delete Game Button Displayed', function(){
        expect(button.length).toEqual(2);
    });

    it('Click Delete Game Button', function(){
        //React.addons.TestUtils.Simulate.click(button[0]);
        GamesStore.remove(GamesStore.at(0))
        expect(button.length).toEqual(1);
        expect(rows.length).toEqual(2);
    });

});