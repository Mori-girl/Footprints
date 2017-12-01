var AppDispatcher=require('../dispatcher/AppDispatcher');

var ButtonActions={
    addNewItem:function(newUser){
        AppDispatcher.dispatch({
            actionType:'ADD_NEW_ITEM',
            newUser:newUser
        });
    },
    deleteUserItem:function(i){
        AppDispatcher.dispatch({
            actionType:'DELETE_USER_ITEM',
            index:i
        })
    }
}
module.exports=ButtonActions;