import React from 'react'
import List from './List';


class CompletedSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true

        };
    }
    
    onToggle = () => {
        
        this.setState({
            isShow: !this.state.isShow
        })
        console.log("Clicked")
    }
    render() {
        const { list, onToggleListItem ,onEditTask, onDeleteTask } = this.props
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center ">
                        {list.length} Completed
                        <span className="btn btn-success" onClick={this.onToggle}>
                            {
                                this.state.isShow ? "Hide" : "Show"
                            }
                        </span>
                    </li>
                </ul>
                {
                    this.state.isShow && <List list={list}
                    onToggleListItem={onToggleListItem}
                    onEditTask={onEditTask}
                    onDeleteTask={onDeleteTask}
                    />
                }

            </div>
        )
    }
}

export default CompletedSection