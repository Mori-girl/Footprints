var EventEmitter=require('events').EventEmitter;
var assign=require('object-assign');
var ListStore=assign({},EventEmitter.prototype,{
    items:JSON.parse(localStorage.getItem('userLists'))||[],
    getAll:function(){
        return this.items;
    },
    addNewItemHandler:function(newUser){
        this.items.push(newUser);
        try{
            localStorage.setItem('userLists',JSON.stringify(this.items));
        }catch(ex){
            console.log('error',ex);
        }
    },
    deleteUserItemHandler:function(index){
        this.items.splice(index,1);
        localStorage.setItem('userLists',JSON.stringify(this.items));
    },
    emitChange:function(){
        this.emit('change');
    },
    addChangeListener:function(callback){
        this.on('change',callback);
    },
    removeChangeListener:function(callback){
        this.removeListener('change',callback);
    }
});
module.exports=ListStore;