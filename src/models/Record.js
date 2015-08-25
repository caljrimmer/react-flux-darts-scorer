import Backbone from 'backbone';
import AppDispatcher from '../dispatcher/AppDispatcher';
import _ from 'underscore';

//One way. No writing to GamesStore
import gamesStore from '../store/GamesStore';

var Record = Backbone.Model.extend({

    defaults : {
        games: 0,
        ave: 0.00,
        bestAve: 0.00,
        bestCheckout: 0,
        highest3d: 0,
        leastDarts: 1000,
        oneEighty: 0,
        oneForty: 0,
        oneTwenty: 0,
        oneHundred: 0,
        greeneye: 0,
        bullseye: 0,
        singles: 0,
        doubles: 0,
        trebles: 0,
        shanghai: 0
    },

    initialize: function() {
        this.dispatchToken = AppDispatcher.register(this.dispatchCallback.bind(this))
    },

    calcAverage : function(games){
        if(games.length === 0){
            this.set('ave',0,{silent: true});
            return;
        }
        var total = _.reduce(games,function(memo, game){ return memo + game.ave; }, 0);
        this.set('ave',Math.round((total/games.length * 100)/100),{silent: true});
    },

    calcBestAverage : function(games){
        if(games.length === 0){
            this.set('bestAve',0,{silent: true});
            return;
        }
        var max = _.max(games,function(game){ return game.ave; });
        this.set('bestAve',max.ave,{silent: true});
    },

    calcBestCheckout : function(games){
        if(games.length === 0){
            this.set('bestCheckout',0,{silent: true});
            return;
        }
        var max = _.max(games,function(game){ return game.achievements.checkout; });
        this.set('bestCheckout',max.achievements.checkout,{silent: true});
    },

    calcHighest3D : function(games){
        if(games.length === 0){
            this.set('highest3d',0,{silent: true});
            return;
        }
        var max = _.max(games,function(game){ return game.achievements.highest3d; });
        this.set('highest3d',max.achievements.highest3d,{silent: true});
    },

    calcNumberDarts : function(games){
        if(games.length === 0){
            this.set('leastDarts',0,{silent: true});
            return;
        }
        var min = _.min(games,function(game){ return game.numberDarts; });
        this.set('leastDarts',min.numberDarts,{silent: true});
    },

    calcAchievements : function(game){
        var iteration = 0,
            updateObj = {};
        _.each(this.attributes,function(v,k){
            //Short hand to skip the first 5 params
            //ToDo: make ignore array
            if(iteration > 5){
                if(game.achievements[k] > 0){
                    updateObj[k] = this.attributes[k] + game.achievements[k]
                }
            }
            iteration ++;
        }.bind(this));
        this.set(updateObj);
    },

    buildRecord : function(){
        var games = gamesStore.toJSON();
        this.clear().set(this.defaults);
        this.set('games',games.length,{silent:true});
        this.calcAverage(games);
        this.calcBestAverage(games);
        this.calcBestCheckout(games);
        this.calcHighest3D(games);
        this.calcNumberDarts(games);
        _.each(games,function(game){
            this.calcAchievements(game);

        }.bind(this));
    },

    dispatchCallback: function(payload) {
        switch (payload.actionType) {
            case 'delete-game':
                AppDispatcher.waitFor([gamesStore.dispatchToken]);
                this.buildRecord();
                break;
            case 'add-game':
                AppDispatcher.waitFor([gamesStore.dispatchToken]);
                this.buildRecord();
                break;
            case 'get-record':
                AppDispatcher.waitFor([gamesStore.dispatchToken]);
                this.buildRecord();
                break;
        }
    }

});

export default new Record();