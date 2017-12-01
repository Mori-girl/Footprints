var React=require('react');

var AddButton=function(props){
    return <div className='wrap'>
        <button onClick={props.addBtnHandler}className='btn primary' key='add'>Join us</button>
    </div>
}
module.exports=AddButton;