import AppDispatcher from '../dispatcher/AppDispatcher';
import LocalStorage from '../custom/LocalStorage';
import _ from 'underscore';

var actions = {

    refresh : function(){
        LocalStorage.getGames();
    },

    getGames: function(value){

        this.refresh();

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

    saveGame: function(value) {

        //API would normally go here;
        LocalStorage.saveGame(value);

        AppDispatcher.dispatch({
            actionType: 'save-game',
            value: 'save-game'
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
