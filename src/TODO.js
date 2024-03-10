import React from 'react'
class TODO extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { task : '', tasklist : [], txtBoxStyle: {display: "none"}, currentIndex: 0}

    handleClick = () => {
        let tasks = this.state.tasklist; 
        tasks.push(this.state.task);  
        this.setState({task:'', tasklist:tasks});    
    }

    handleDelete = (task) => {
        let tasks = this.state.tasklist.filter((t)=>{return t !== task});
        this.setState({tasklist:tasks});
    }

    handleEdit = (index) => {
        this.setState({task: this.state.tasklist[index], currentIndex: index})
        this.setState({txtBoxStyle: {display:"block"}});
    }

    handleEditTask = () => {
        let tasks = this.state.tasklist;
        tasks[this.state.currentIndex] = this.state.task;
        this.setState({tasklist:tasks, txtBoxStyle:{display:"none"}, task: ''})
    }

    componentDidMount(){
        if(!(localStorage.getItem('Tasks') === null)){
            this.setState({tasklist:localStorage.getItem('Tasks').split(',')})
        }
    }

    componentDidUpdate(){
        localStorage.setItem('Tasks', this.state.tasklist);
    }

    render() { 
        return (
            <>
                Input : <input type="text" value={this.state.task} onChange={(e) => this.setState({task:e.target.value})}/>
                <input type="button" value="Add Task" onClick={this.handleClick}/>
                <input type="button" style={this.state.txtBoxStyle} value="Edit Task" onClick={this.handleEditTask}/><br/>
                {this.state.tasklist.map((task, index) => {
                    return (
                        <li key={index}>{task} <button onClick={() => this.handleDelete(task)}>Delete</button> <button onClick={() => this.handleEdit(index)}>Edit</button></li>
                    )
                })}
            </>
         );
    }
}
 
export default TODO;