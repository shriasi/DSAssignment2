import React from 'react';
import axios from 'axios';
class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selleritems:[],
      id:0,
      item_name:'',
      item_description:'',
    }
  }
  componentDidMount(){
    axios.get("http://localhost:8080/api/")
    .then((res)=>{
      this.setState({
        selleritems:res.data,
        id:0,
        item_name:'',
        item_description:'',
      })
    })
  }
  submit(evenet,id){
    console.log(id)
    evenet.preventDefault();
    if(id===0){
      axios.post("http://localhost:8080/api/",{
        item_name:this.state.item_name,
        item_description:this.state.item_description,
      }).then(()=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:8080/api/",{
        id:id,
        item_name:this.state.item_name,
        item_description:this.state.item_description,
      }).then(()=>{
        this.componentDidMount();
      })
    }
  }
  delete(id){
    axios.delete("http://localhost:8080/api/"+id)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get("http://localhost:8080/api/"+id)
    .then((res)=>{
      this.setState({
        id:res.data.id,
        item_name:res.data.item_name,
        item_description:res.data.item_description,
      });
    }) 
  }
  render(){
    return (
      <div class="container">
         <div class="row">
         <div class="col s6">
                 <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                 <div class="form-group">
                 <label for="itemname_input">Item Name</label>
                    <input value={this.state.item_name} onChange={(e)=>this.setState({item_name:e.target.value})} type="text"  id="itemname_input" placeholder="e.g: Tables"  />
                  </div>
                  <div lass="form-group">
                  <label for="itemdescription_input">Item Description</label>
                    <input value={this.state.email} onChange={(e)=>this.setState({item_description:e.target.value})} type="text" id="itemdescription_input"/>
                  </div>
                  <button type="submit button" name="action" class="btn btn-primary">Add an Item</button>
                 </form>
          </div>          
          <div className="col s6">
          <table class="table">
        <thead>
          <tr>
              <th>Item Name</th>
              <th>Item Description</th>
              
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
            {
              this.state.selleritems.map(SellerItem =>
                  <tr key={SellerItem.id}>
                      <td>{SellerItem.name}</td>
                      <td>{SellerItem.email}</td>
                      <td>{SellerItem.password}</td>
                      <td>
                        <button onClick={(e)=>this.edit(SellerItem.id)}  type="submit button" name="action">
                          <i className="material-icons ">edit</i>
                        </button>       
                      </td>
                      <td>
                        <button onClick={(e)=>this.delete(SellerItem.id)}  type="submit button" name="action">
                          <i className="material-icons ">delete</i>
                        </button>       
                      </td>
                  </tr>
                )
            }
         

        </tbody>
      </table>
          </div>                
          </div>              
      </div>
    );
  }
}

export default App;
