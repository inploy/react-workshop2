import React from 'react'


class Header extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        };
    }
    render(){
        const { title, onCreateNewItem} = this.props
        return (
            <ul class="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center color-title" >{title}
            <span class="btn btn-success" onClick={onCreateNewItem}><i class="fas fa-plus"></i></span></li>
           
            </ul>
        )
    }
}

export default Header