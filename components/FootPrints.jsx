var React=require('react');
var FootPrints=React.createClass({
    handleDeleteBtnClick:function(e){
        var index=e.target.getAttribute('data-index');
        this.props.deleteUserHandler(index);
    },
     render:function(){
         var _this=this;
         return <div className='lists'>
           <table>
               <thead className='thead'>
                    <tr>
                        <th>avatar</th>
                        <th>name</th>
                        <th>age</th>
                        <th>sex</th>
                        <th>Operate</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                   { this.props.items.map(function(listItem,i){
                        return <tr key={i}>
                            <td><img src={listItem.photoData} style={{width:'64px',height:'64px',borderRadius:'32px',}}/></td>
                            <td style={{color:'#108ee9'}}>{listItem.name}</td>
                            <td>{listItem.age}</td>
                            <td>{listItem.sex}</td>
                            <td><button className='btn delete'data-index={i} onClick={_this.handleDeleteBtnClick}>Delete</button></td>
                            </tr>
                    })
                    }
                </tbody>
            </table>
            </div>
     }
});
module.exports=FootPrints;