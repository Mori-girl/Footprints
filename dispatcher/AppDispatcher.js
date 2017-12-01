var Dispatcher=require('flux').Dispatcher;
var AppDispatcher=new Dispatcher();
var ListStore=require('../stores/ListStore');

AppDispatcher.register(function(action){
    switch(action.actionType){
        case 'ADD_NEW_ITEM':
            ListStore.addNewItemHandler(action.newUser);
            ListStore.emitChange();
            break;
        case 'DELETE_USER_ITEM':
            ListStore.deleteUserItemHandler(action.index);
            ListStore.emitChange();
            break;
        default:
            break;
    }
});
module.exports=AppDispatcher;