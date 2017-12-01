var React=require('react');
var ButtonActions=require('../actions/ButtonActions');
var ListStore = require('../stores/ListStore');
var AddButton=require('./AddButton');
var FootPrints=require('./FootPrints');
var AddUerInfo=require('./AddUerInfo');
var MyButtonController=React.createClass({
    getInitialState:function(){
        return{
            items:ListStore.getAll(),
            isAddBtnSelected:false
        };
    },
    componentDidMount:function(){
        ListStore.addChangeListener(this._onChange);
    },
    createNewItem:function(obj){
       this.restoreTopPanel();
       ButtonActions.addNewItem(obj);
    },
    cancelCreate:function(){
       this.restoreTopPanel();
    },
    addBtnHandler:function(){
        this.setState({isAddBtnSelected:true});
        document.querySelectorAll('.wrap')[0].style.display='none';
    },
    restoreTopPanel:function(){
        this.setState({isAddBtnSelected:false});
        document.querySelectorAll('.wrap')[0].style.display='inline-block';
    },
    deleteUserHandler:function(i){
       ButtonActions.deleteUserItem(i);
    },
    componentWillUnmount:function(){
        ListStore.removeChangeListener(this._onChange);
    },
    _onChange:function(){
        this.setState({
            items:ListStore.getAll(),
        })
    },
    render:function(){
        return <div className='content'>
            <AddButton 
                addBtnHandler={this.addBtnHandler}
            />
             {this.state.isAddBtnSelected && <AddUerInfo createNewItem={this.createNewItem} cancelCreate={this.cancelCreate}/>}
             <FootPrints  
                items={this.state.items} deleteUserHandler={this.deleteUserHandler}
            />
            </div>
    }
});
module.exports=MyButtonController;