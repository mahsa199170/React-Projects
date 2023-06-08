import React, {useState, useRef, useEffect} from 'react'

import useLocalStorage from 'use-local-storage'
import  "./TaskManager.css"

import Task from "./Task"


const TaskManager = () => {

    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    // const [tasks, setTasks] = useState([])

    const [tasks, setTasks] = useLocalStorage("tasks",[])

    const [taskID, setTaskID] = useState(null)
    const [isEditing, setIsEditing] = useState(false)


    const nameInputRef = useRef(null);


    useEffect (()=>{
        nameInputRef.current.focus();
})


    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!name && !date || !name || !date){
            alert("fill the ofrm dayoos")
        }else if (name && date && isEditing){
            setTasks(
                tasks.map((task)=>{
                    if(task.id=== taskID){
                        return {...task, name : name , date : date, complete: false}
                    }
                    return task
                })
            )
            setName("")
            setDate("")
            setIsEditing(false)
            setTaskID(null)
        }
        
        else{
            // here we create a new varibale to catch the values of date, and name, infact we create an pbject cause we want to catch two vlues

            const newTask = {
                id: Date.now(),
                name: name, //in es6 if the property and value has teh same name we can just write one: here name
                date: date,  //date
                complete: false,
            };

            //npw we want to insert this object into task:
            setTasks([...tasks, newTask])
            //we want to remove teh name and date when we hit the submit buton
            setName("")
            setDate("")

     
        }

      

        

    }
    //this function will take the info from the task that we want to edit and push it into the form to show and edit 
    const editTask = (id)=>{
        const thisTask = tasks.find((task)=> task.id === id )
        setIsEditing(true)
        setTaskID(id)
        setName(thisTask.name)
        setDate(thisTask.date)

    }


    const deleteTask = (id)=>{

        if(window.confirm("Delete this task") === true){
            const newTasks = tasks.filter((task) => task.id !== id)
            setTasks(newTasks)

        }
        



    }


    const completeTask = (id)=>{
        setTasks(
            tasks.map((task)=>{
                if(task.id === id){
                    return {...task, complete:true}
                }
                return task
            })
        )
    }






  return (

    <div className="--bg-primary">
    <h1 className="--text-center --text-light">Task Manager</h1>
    <div className="--flex-center --p">
      <div className="--card --bg-light --width-500px --p --flex-center">
        <form  className="form --form-control "  onSubmit={handleSubmit}>
          <div className='--flex-center'>
            <label htmlFor="name">Task:</label>
            <input
              ref = {nameInputRef}
              type="text"
              placeholder="Task name"
              name="name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />

          </div>
          <div className='--flex-center'>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              placeholder="Task name"
              name="date"
              value={date}
              onChange={(e)=> setDate(e.target.value)}
             
            />
          </div>
          <button className="--btn --btn-success --btn-block">
            {isEditing ? "Edit Task" : "Save Task"}
          </button>
        </form>
      </div>
    </div>

    {/* display task */}
    <article className="--flex-center --my2">
        <div className="--width-500px --p">
            <h2 className="--text-light">Task List</h2>
            <hr style={{background: "#fff"}}/>
            {tasks.length === 0 ? (<p className='--text-light'>No Task Added..</p>) :(
                <div>
                {tasks.map((task)=>{
                    return <Task {...task} editTask={editTask} 
                    deleteTask={deleteTask} completeTask = {completeTask}/>
                })}
                </div>
            ) }
            
        </div>
    </article>
    </div>
  )
}

export default TaskManager
