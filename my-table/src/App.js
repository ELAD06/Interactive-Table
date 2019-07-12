import React from 'react';
import { Table, Button } from 'reactstrap';

class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      lista: [
        {id:1, firtName:"Ana", lastName:"Otto", username:"@jeje"},
        {id:1, firtName:"pepe", lastName:"Ette", username:"@juju"},
        {id:1, firtName:"Sandra", lastName:"Uttu", username:"@jiju"}
      ]
    }
  }

  edit(data) {
    console.table(data)
  }

  delete(id) {
    console.log(id)
  }

  render (){
    let {lista} = this.state;
    return (
    <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((item, i) => {
            return <tr key= {i}>
              <th scope="row">{item.id}</th>
              <td>{item.firtName}</td>
              <td>{item.lastName}</td>
              <td>{item.username}</td>
              <td>
                <Button color="primary" onClick={this.edit.bind(this,item)}>Edit</Button>{' '}
                <Button color="secondary" onClick={this.delete.bind(this,item.id)} >Delet</Button>{' '}
              </td>
            </tr>
          })}
        </tbody>
    </Table>
    );
  }
}

export default App;