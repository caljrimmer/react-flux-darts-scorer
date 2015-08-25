import Backbone from 'backbone';
import _ from 'underscore';
import AppDispatcher from '../dispatcher/AppDispatcher';

//Shared
import DartsScorer from '../custom/DartsScorer'

var CurrentGame = Backbone.Model.extend({

    defaults : {
        gameStart: new Date(),
        gameEnd: new Date(),
        numberDarts: 0,
        ave: 0.00,
        type: 501,
        score : 501,
        list : [],
        achievements : {
            checkout : 0,
            highest3d : 0,
            oneEighty : 0,
            oneForty : 0,
            oneTwenty : 0,
            oneHundred : 0,
            greeneye : 0,
            bullseye : 0,
            singles : 0,
            doubles : 0,
            trebles : 0,
            shanghai : 0
        },
        rounds : [{
            darts : [],
            total : 0,
            score : 501
        }]
    },

    initialize: function() {
        this.dispatchToken = AppDispatcher.register(this.dispatchCallback.bind(this))
    },

    sync: function(method, model, options) {

        if(method !== "read"){
            //LocalStorageActions.setCurrentGame(model);
        }else{
            //LocalStorageActions.getCurrentGame();
        }

        return;

    },

    newGame : function(){
        this.clear().set(this.defaults);
    },

    scoreRound : function(list){
            var obj = {
                total : 0,
                score : 501,
                darts : []
            },
            score = 0,
            loop = 0,
            tmp = [],
            parentArray = [];

        var EndGameCheck = function(score,curScore,desc){
            if((score >= curScore) && (score - curScore !== 1)){
                if(score === curScore){
                    return DartsScorer.doublesValidate(desc);
                }
                return true;
            }else{
                return false;
            }
        };

        _.each(list,function(v,k){
            var curScore = DartsScorer.scoreParse(v.desc);
            v.index = k;
            score -= curScore;
            obj.total += curScore;

            if(EndGameCheck(obj.score,curScore,v.desc)){
                obj.score -= curScore;
            }

            v.score = obj.score;

            obj.darts.push(v);
            parentArray[loop] = obj;
            if ((k + 1) % 3 === 0){
                loop = ((k + 1) / 3);
                tmp = [];
                obj = {
                    total : 0,
                    score : obj.score,
                    darts : []
                };
            }
        });
        this.set('rounds',parentArray,{silent:true});
    },

    scoreAchievements : function(ach,rounds){

        var UpdateAchievements = function(achievements,round){
                var total = DartsScorer.scoreParse(round.darts[0].desc)
                    + DartsScorer.scoreParse(round.darts[1].desc)
                    + DartsScorer.scoreParse(round.darts[2].desc);

                if(achievements.highest3d < total){
                    achievements.highest3d = total;
                }

                if(DartsScorer.oneEightyAch(total)){
                    ++achievements.oneEighty;
                }

                if(DartsScorer.oneFortyAch(total)){
                    ++achievements.oneForty;
                }

                if(DartsScorer.oneTwentyAch(total)){
                    ++achievements.oneTwenty;
                }

                if(DartsScorer.oneHundredAch(total)){
                    ++achievements.oneHundred;
                }

                if(DartsScorer.singlesAch(round.darts)){
                    ++achievements.singles;
                }

                if(DartsScorer.doublesAch(round.darts)){
                    ++achievements.doubles;
                }

                if(DartsScorer.treblesAch(round.darts)){
                    ++achievements.trebles;
                }

                if(DartsScorer.bullsEyeAch(round.darts)){
                    ++achievements.bullseye;
                }

                if(DartsScorer.greenEyeAch(round.darts,total)){
                    ++achievements.greeneye;
                }

                if(DartsScorer.shanghaiAch(round.darts,total)){
                    ++achievements.shanghai;
                }

                return achievements;
            }

        _.each(rounds,function(v,k){
            if(v.darts.length === 3){
                ach = UpdateAchievements(ach,v);
            }
        });

        if(rounds[rounds.length - 1].score === 0){
            ach.checkout = rounds[rounds.length - 2].score;
        }else{
            ach.checkout = rounds[rounds.length - 1].score;
        }

        this.set('achievements',ach,{silent:true});
    },

    scoreDart : function(value){
        var list = this.get('list');
        list.push({
            desc : DartsScorer.scoreSanitise(value),
            score : DartsScorer.scoreParse(value),
            index : list.length

        });
        this.set('list',list,{silent:true});
    },

    scoreInfo : function(rounds,list){
        var score = rounds[rounds.length-1].score;
        var numberDarts = list.length;
        var checkoutRoute = DartsScorer.checkoutCalculation(score);
        var ave = Math.round(((this.get('type') - score) / numberDarts) * 3 *100)/100;
        this.set({
            score: rounds[rounds.length-1].score,
            numberDarts : list.length,
            checkoutRoute:checkoutRoute,
            ave : ave
        });
    },

    scoreGame : function(value){
        this.scoreDart(value);
        this.scoreRound(this.get('list'));
        this.scoreAchievements(this.get('achievements'),this.get('rounds'));
        this.scoreInfo(this.get('rounds'),this.get('list'));
    },

    dispatchCallback: function(payload) {
        switch (payload.actionType) {
            case 'new-game':
                this.newGame();
                break;
            case 'score-dart':
                this.scoreGame(payload.value);
                break;
        }
    }

});

var Game = Backbone.Model.extend({});
var Games = Backbone.Collection.extend({

    model:Game,

    initialize: function() {
        this.dispatchToken = AppDispatcher.register(this.dispatchCallback.bind(this));
    },

    sync: function(method, collection, options) {

        if(method === "read"){
            //LocalStorageActions.getGames(collection);
        }else{
            //LocalStorageActions.storeGames(collection);
        }

        return;

    },

    dispatchCallback: function(payload) {
        switch (payload.actionType) {
            case 'get-games':
                this.fetch();
                break;
            case 'delete-game':
                this.sync('remove',this);
                break;
            case 'add-game':
                this.add(payload.value)
                break;
        }
    }

});

var currentGame = new CurrentGame();
var games = new Games();

exports = {currentGame, games};
export default exports;