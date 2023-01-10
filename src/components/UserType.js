import React, { Component } from 'react'

class UserType extends Component {

    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ]
        }
    }


    renderItems = () => {
        const data = this.state.userData;        
const newData=data.filter((detail)=>{
    return detail.user_type==='Designer';
})
        
        const mapRows = newData.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
                    <span>Id: {item.id}</span>  &nbsp;&nbsp;&nbsp;
                    <span>Name : {item.name}</span>  &nbsp;&nbsp;&nbsp;
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };

  render() {
    return (
        <React.Fragment>
        <h1>Display based on user type</h1>
        <div className="display-box">
        <ul>{this.renderItems()} </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default UserType