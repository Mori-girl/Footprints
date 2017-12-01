var React=require('react');
var  _photoData='';
var AddUserInfo=React.createClass({
    handleAddIcon:function(){
         var input=this.refs.addIcon;
         input.click();
         input.onchange=function(){
            var objURL=getObjectURL(this.files[0]);
            if(objURL){
            var btn=document.getElementById('icon');
            var reader=new FileReader();
            reader.readAsDataURL(this.files[0]);
            reader.onload=function(){
               _photoData=reader.result;
            };
            btn.setAttribute("src",objURL);
            }
         }
    },
    handleAddUser:function(){
        var _name=this.refs.name.value;
        var _age=this.refs.age.value;
        var _sex=this.refs.sex.value;
        var a=true,b=true,c=true;
        if(_name===''){
            this.refs.name.focus();
            return;
        }
        if(/[1-9]\d{0,1}/.test(_age)==false){
            this.refs.age.focus();
            return;
        }
        if(_photoData===''){
            alert('Please upload your avatar');
            return;
        }
        this.props.createNewItem({name:_name,age:_age,sex:_sex,photoData: _photoData});
        _photoData='';
    },
    render:function(){
        return <div className='wrap active'>
                    <div className='innerFrame'>                   
                        <input type='text' name='userName' ref='name' placeholder='Enter your name'/>
                        <input type='text' name='userAge'ref='age' placeholder='Age'/> 
                        <select type='select' name='sex'ref='sex'className='downList'>
                            <option value='boy'>&nbsp;&nbsp;I am a boy</option>
                            <option value='girl'>&nbsp;&nbsp;I am a girl</option>
                        </select>
                        <input type='file' name='userIcon' ref='addIcon' style={{display:'none'}} accept="image/*"/>
                        <a onClick={this.handleAddIcon} id='addIconBtn'><img id='icon'src='../assets/upload.png'/>Add your avatar</a>
                        <button className='btn primary addUser' onClick={this.handleAddUser}>Add</button>
                        <a id='close' onClick={this.props.cancelCreate}><img src='../assets/close.png'/></a>
                    </div>
                </div>
    }
})
var getObjectURL=file=>{
    if( typeof file==='undefined'){
        return;
    }
    var url=null;
    if(window.createObjectURL!=undefined){
        url=createObjectURL(file);
    }else if(window.URL!=undefined){   //mozilla(firefox)
        url=window.URL.createObjectURL(file);
    }else if(window.webkitURL!=undefined){   //webkit or chrome
        url=window.webkitURL.createObjectURL(file);
    }
    return url;
}
module.exports=AddUserInfo;