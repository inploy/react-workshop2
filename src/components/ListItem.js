import React from 'react'


class ListItem extends React.Component {
    constructor(props){
        super(props);
        this.state ={

        };
    }
  
    render(){
        const { listItem, onToggleListItem, onEditTask, onDeleteTask } = this.props
        return (
            <ul class="list-group">
            {
                listItem.map(({title , index , isCompleted}) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center color-title" key={index}>
                         <input id={index} type="checkbox"  checked={isCompleted} onChange={onToggleListItem}/>
                          <input id={index} style={{width : 450}} type="text" className="form-control" value={title} onChange={onEditTask} placeholder="add new task" /> 
                         <button type="button" class="btn btn-outline-danger" id={index}  onClick={onDeleteTask}>
                         <i class="fas fa-trash-alt"></i>
                         </button >
                               
                    </li>

                ))
            }
            </ul>
        )
    }
}

export default ListItem