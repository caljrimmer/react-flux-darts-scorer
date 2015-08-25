import _ from 'underscore';
import gamesStore from '../store/GamesStore';

var actions = {

    delimiter : ':::',

    resetDummyGames : function(delimiter) {
        return '{"numberDarts":13,"ave":115.62,"type":501,"score":0,"newlyCreated":false,"gameStart":"2013-04-10T18:36:59.186Z","gameEnd":"2013-04-10T18:37:07.921Z","list":[{"desc":"50","score":451,"index":0},{"desc":"50","score":401,"index":1},{"desc":"50","score":351,"index":2},{"desc":"50","score":301,"index":3},{"desc":"50","score":251,"index":4},{"desc":"50","score":201,"index":5},{"desc":"50","score":151,"index":6},{"desc":"50","score":101,"index":7},{"desc":"50","score":51,"index":8},{"desc":"50","score":51,"index":9},{"desc":"50","score":51,"index":10},{"desc":"1","score":50,"index":11},{"desc":"50","score":0,"index":12}],"achievements":{"checkout":50,"highest3d":150,"oneEighty":0,"oneForty":3,"oneTwenty":0,"oneHundred":1,"greeneye":4,"bullseye":3,"singles":0,"doubles":3,"trebles":0,"shanghai":0},"rounds":[{"total":150,"score":351,"darts":[{"desc":"50","score":451,"index":0},{"desc":"50","score":401,"index":1},{"desc":"50","score":351,"index":2}]},{"total":150,"score":201,"darts":[{"desc":"50","score":301,"index":3},{"desc":"50","score":251,"index":4},{"desc":"50","score":201,"index":5}]},{"total":150,"score":51,"darts":[{"desc":"50","score":151,"index":6},{"desc":"50","score":101,"index":7},{"desc":"50","score":51,"index":8}]},{"total":101,"score":50,"darts":[{"desc":"50","score":51,"index":9},{"desc":"50","score":51,"index":10},{"desc":"1","score":50,"index":11}]},{"total":50,"score":0,"darts":[{"desc":"50","score":0,"index":12}]}],"checkoutRoute":"- - -","scorerInput":"graphic","id":"fc9c36ef-7804-f9c2-f5ac-2075516397a5"}' + delimiter + '{"numberDarts":16,"ave":93.94,"type":501,"score":0,"newlyCreated":false,"gameStart":"2013-04-10T14:55:54.024Z","gameEnd":"2013-04-10T14:56:05.966Z","list":[{"desc":"50","score":451,"index":0},{"desc":"50","score":401,"index":1},{"desc":"50","score":351,"index":2},{"desc":"50","score":301,"index":3},{"desc":"50","score":251,"index":4},{"desc":"50","score":201,"index":5},{"desc":"50","score":151,"index":6},{"desc":"50","score":101,"index":7},{"desc":"50","score":51,"index":8},{"desc":"50","score":51,"index":9},{"desc":"50","score":51,"index":10},{"desc":"50","score":51,"index":11},{"desc":"50","score":51,"index":12},{"desc":"50","score":51,"index":13},{"desc":"1","score":50,"index":14},{"desc":"50","score":0,"index":15}],"achievements":{"checkout":50,"highest3d":150,"oneEighty":0,"oneForty":4,"oneTwenty":0,"oneHundred":1,"greeneye":5,"bullseye":4,"singles":0,"doubles":4,"trebles":0,"shanghai":0},"rounds":[{"total":150,"score":351,"darts":[{"desc":"50","score":451,"index":0},{"desc":"50","score":401,"index":1},{"desc":"50","score":351,"index":2}]},{"total":150,"score":201,"darts":[{"desc":"50","score":301,"index":3},{"desc":"50","score":251,"index":4},{"desc":"50","score":201,"index":5}]},{"total":150,"score":51,"darts":[{"desc":"50","score":151,"index":6},{"desc":"50","score":101,"index":7},{"desc":"50","score":51,"index":8}]},{"total":150,"score":51,"darts":[{"desc":"50","score":51,"index":9},{"desc":"50","score":51,"index":10},{"desc":"50","score":51,"index":11}]},{"total":101,"score":50,"darts":[{"desc":"50","score":51,"index":12},{"desc":"50","score":51,"index":13},{"desc":"1","score":50,"index":14}]},{"total":50,"score":0,"darts":[{"desc":"50","score":0,"index":15}]}],"checkoutRoute":"- - -","scorerInput":"graphic","id":"46d42756-4696-5f83-23c8-fdb8aa3c4ae1"}' + delimiter + '{"numberDarts":11,"ave":136.64,"type":501,"score":0,"newlyCreated":false,"gameStart":"2013-04-10T18:53:21.042Z","gameEnd":"2013-04-10T18:53:30.049Z","list":[{"desc":"50","score":451,"index":0},{"desc":"50","score":401,"index":1},{"desc":"50","score":351,"index":2},{"desc":"50","score":301,"index":3},{"desc":"50","score":251,"index":4},{"desc":"50","score":201,"index":5},{"desc":"50","score":151,"index":6},{"desc":"50","score":101,"index":7},{"desc":"50","score":51,"index":8},{"desc":"1","score":50,"index":9},{"desc":"50","score":0,"index":10}],"achievements":{"checkout":51,"highest3d":150,"oneEighty":0,"oneForty":3,"oneTwenty":0,"oneHundred":0,"greeneye":3,"bullseye":3,"singles":0,"doubles":3,"trebles":0,"shanghai":0},"rounds":[{"total":150,"score":351,"darts":[{"desc":"50","score":451,"index":0},{"desc":"50","score":401,"index":1},{"desc":"50","score":351,"index":2}]},{"total":150,"score":201,"darts":[{"desc":"50","score":301,"index":3},{"desc":"50","score":251,"index":4},{"desc":"50","score":201,"index":5}]},{"total":150,"score":51,"darts":[{"desc":"50","score":151,"index":6},{"desc":"50","score":101,"index":7},{"desc":"50","score":51,"index":8}]},{"total":51,"score":0,"darts":[{"desc":"1","score":50,"index":9},{"desc":"50","score":0,"index":10}]}],"checkoutRoute":"- - -","scorerInput":"graphic","id":"2e9674c6-1fe2-0d0f-a7a9-b424b6db5efd"}';
    },

    parseToModel : function(){
        var rawData = localStorage.games.split(this.delimiter);
        _.each(rawData,function(rawGame){
            gamesStore.add(JSON.parse(rawGame));
        });
    },

    parseToLocalStorage : function(){
        var newArray = gamesStore.toJSON();
        var delimiter = this.delimiter;
        var str = "";
        _.each(newArray, function(game,i){
            if(i !== 0){
                str += delimiter
            }
            str += JSON.stringify(game);
        });
        localStorage.games = str;
    },

    getGames : function(){
        //!!!!Just for Initial data
        if(!(localStorage && localStorage.games)){
            localStorage.games = this.resetDummyGames(this.delimiter);
        }
        this.parseToModel();
    },

    deleteGame : function(value){
        gamesStore.remove(value);
        if(gamesStore.length){
            this.parseToLocalStorage();
        }else{
            localStorage.games = "";
        }

    },

    storeGames: function() {
        var newArray = gamesStore.toJSON();
        var delimiter = this.delimiter;
        var str = "";
        _.each(newArray, function(game,i){
            if(i !== 0){
                str += delimiter
            }
            str += JSON.stringify(game);
        });
        localStorage.games = str;
    },

    getCurrentGame: function() {
        if(!(localStorage && localStorage.currentGame)){
            localStorage.currentGame = "";
        }
        return localStorage.currentGame;
    },

    setCurrentGame: function(game) {
        localStorage.currentGame = JSON.stringify(game);
    }

};

export default actions