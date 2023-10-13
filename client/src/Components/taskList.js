import React from'react';
import axios from 'axios'

class TaskList extends React.Component{
    state = {
        task : "",
        taskList : []
    }

    getTaskList = () => {
        axios.get("http://localhost:4000/tasks")
        .then((response) => response.data)
        .then(response => this.setState({taskList : response}));
    }

    onDeleteClick = () => {
        console.log("Inside Delete")
    }

    onSubmitClick = () => {
        axios.post("http://localhost:4000/addtasks",{
            task: this.state.task
        })
    }

    render(){
        return (
            <div>
            <div>Tasklist</div>
            <div className='ui input'>
            <input value={this.state.task} onChange={e=> this.setState({
                task : e.target.value
            })} placeholder='your tasks'/>
            </div>
            <button className='ui primary button basic' onClick={
                                    () => this.onSubmitClick()
                                } >Submit</button>
            <hr/>
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="meta">
                            Todo
                        </div>
                        <div className='extra content'>
                            <div className="ui two buttons">
                                <div className='ui basic green button'>Done</div>
                                <div className='ui basic green button' onClick={
                                    () => this.onDeleteClick()
                                } >Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default TaskList;