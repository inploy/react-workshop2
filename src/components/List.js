import React from 'react'
import ListItem from './ListItem';


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const { list, onToggleListItem, onEditTask, onDeleteTask } = this.props
        return (
            <ul class="list-group">
                 <ListItem 
                        listItem={list} 
                        onToggleListItem={onToggleListItem} 
                        onEditTask={onEditTask} 
                        onDeleteTask={onDeleteTask} 
                />

            </ul>
        )
    }
}

export default List