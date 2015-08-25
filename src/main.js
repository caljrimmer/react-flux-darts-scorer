//Lib
import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';

//Stores
import currentGameStore from './store/GameStore';
import gamesStore from './store/GamesStore';
import recordStore from './store/RecordStore';

//Actions
import AppActions from './actions/AppActions';

//Components
import Dashboard from './components/Dashboard';
import Scorer from './components/Scorer';
import Stats from './components/Stats';
import Detail from './components/Detail';

var Router = Backbone.Router.extend({

    routes : {
        'dashboard' : 'dashboard',
        'scorer' : 'scorer',
        'game/:gameid': 'gameDetail',
        'stats' : 'stats',
        '': 'dashboard',
        '*notFound': 'dashboard'
    },

    initialize: function(){
        AppActions.getGames(gamesStore);
        AppActions.getRecord(gamesStore);
    },

    cleanMemory: function(){
        ReactDOM.unmountComponentAtNode(document.getElementById('container'));
    },

    dashboard : function() {
        this.cleanMemory();
        ReactDOM.render(
            <Dashboard model={recordStore} collection={gamesStore} />,
            document.getElementById('container')
        );
    },

    scorer : function() {
        this.cleanMemory();
        AppActions.newGame();
        ReactDOM.render(
            <Scorer model={currentGameStore} collection={gamesStore} />,
            document.getElementById('container')
        );
    },

    gameDetail : function(modelID) {
        this.cleanMemory();
        ReactDOM.render(
            <Detail modelID={modelID} collection={gamesStore} />,
            document.getElementById('container')
        );
    },

    stats : function() {
        this.cleanMemory();
        ReactDOM.render(
            <Stats model={recordStore} collection={gamesStore} />,
            document.getElementById('container')
        );
    }

});

new Router();
Backbone.history.start();