import AppDispatcher from '../dispatcher/AppDispatcher';
import LocalStorage from '../custom/LocalStorage';
import _ from 'underscore';

var actions = {

    getGames: function(value){

        //API would normally go here;
        LocalStorage.getGames();

        AppDispatcher.dispatch({
            actionType: 'get-games',
            value: value
        });
    },

    getRecord: function(value){
        AppDispatcher.dispatch({
            actionType: 'get-record',
            value: value
        });
    },

    newGame: function() {
        AppDispatcher.dispatch({
            actionType: 'new-game',
            value: 'new-game'
        });
    },

    deleteGame: function(value) {

        //API would normally go here;
        LocalStorage.deleteGame(value);

        AppDispatcher.dispatch({
            actionType: 'delete-game',
            value: value
        });
    },

    scoreDart: function(value) {
        AppDispatcher.dispatch({
            actionType: 'score-dart',
            value: value
        });
    }

};

export default actions
