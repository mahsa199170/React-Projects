import React, {useState, useRef, useEffect, useReducer} from 'react'

import useLocalStorage from 'use-local-storage'
import  "./TaskManager.css"
import Alert from "../alert/Alert"
import Confirm from "../confirm/Confirm"

import { taskReducer } from './taskReducer'

import Task from "./Task"



const TaskManagerReducer = () => {
    
    //we need these cause we want to get input from user, so it cannot be useReducer
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [tasks, setTasks] = useLocalStorage("tasks",[])

    // const [taskID, setTaskID] = useState(null)
    // const [isEditing, setIsEditing] = useState(false)



    const initialState = {
        tasks: tasks,
        taskID:null,
        isEditing:false,
        isAlertOpen: false,
        alertContent: "This is an alert",
        alertClass: "danger",
        isEditModalOpen:false,
        isDeleteModalOpen:false,
        modalTitle: "Delete Task",
        modalMsg: "You are about to delete this task",
        modalActionText:"OK"
    
    }

    const [state,dispatch] = useReducer(taskReducer, initialState)


    const nameInputRef = useRef(null);


    useEffect (()=>{
        nameInputRef.current.focus();
})

  const closeAlert = ()=>{
    dispatch({
      type:"CLOSE_ALERT"
    })

  }


    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!name || !date){
          dispatch({
            type: "EMPTY_FIELD"
        })
        }
        if(name && date && state.isEditing){

          const updatedTask = {
            id: state.taskID,
            name,
            date,
            complete: false
          }
          dispatch({
            type: "UPDATE-TASK",
            payload: updatedTask
          })

          setName("")
          setDate("")
          setTasks(
            tasks.map((task)=>{
              if(task.id === updatedTask.id){
                return {...task, name, date, complete:false}
              }
              return task
            })
          )

          return;

        }
        if( name && date){
          const newTask = {
            id: Date.now(),
            name,
            date,
            complete: false
          }
          dispatch({
            type: "ADD-TASK",
            payload: newTask
          })
          setName("")
          setDate("")
          setTasks([...tasks, newTask])
        }
    }

    const openEditModal = (id)=>{

      dispatch({
        type:"OPEN-EDIT-MODAL",
        payload: id
      })

    }

    //this function will take the info from the task that we want to edit and push it into the form to show and edit 
    const editTask = ()=>{
      const id = state.taskID

      dispatch({
        type:"EDIT-TASK",
        payload: id
      })

      const thisTask = state.tasks.find((task)=> task.id ===id)
      setName(thisTask.name)
      setDate(thisTask.date)
      closeModal();

    }


    const deleteTask = ()=>{
      const id = state.taskID
      dispatch({
        type: "DELETE_TASK",
        payload:id
      })
      const newTasks = tasks.filter((task)=> task.id !== id)
      setTasks(newTasks)

    }

    const openDeletModal = (id) =>{
      dispatch({
        type: "OPEN-DELETE-MODAL",
        payload: id

      })
    }


    const completeTask = (id)=>{

      dispatch({
        type: "COMPLETE_TASK",
        payload: id
      })

      setTasks(
        tasks.map((task)=>{
          if(task.id === id) {
            return {...task, complete: true}
          }
          return task
        })
      )

    }

    const closeModal = ()=>{

      dispatch({
        type:"CLOSE-MODAL"
      })

    }

   





  return (

    <div className="--bg-primary">
       
        {state.isAlertOpen && (
        <Alert 
          alertContent={state.alertContent} 
          alertClass={state.alertClass} 
          onCloseAlert={closeAlert}
          />)}
          {state.isEditModalOpen && 
          (<Confirm modalTitle={state.modalTitle} 
          modalMsg={state.modalMsg} modalActionText={state.modalActionText}
          modalAction={editTask}
          onCloseModal={closeModal}/>
          )}

          {state.isDeleteModalOpen && (
            <Confirm modalTitle={state.modalTitle} 
            modalMsg={state.modalMsg} 
            modalActionText={state.modalActionText}
            modalAction={deleteTask}
            onCloseModal={closeModal}/>

          )}
     {/* <Confirm /> */}
    <h2 className="--text-center --text-light">Task Manager</h2>
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
            {state.isEditing ? "Edit Task" : "Save Task"}
          </button>
        </form>
      </div>
    </div>

    {/* display task */}
    <article className="--flex-center --my2">
        <div className="--width-500px --p">
            <h2 className="--text-light">Task List</h2>
            <hr style={{background: "#fff"}}/>
            {state.tasks.length === 0 ? (<p className='--text-light'>No Task Added..</p>) :(
                <div>
                {state.tasks.map((task)=>{
                    return (<Task 
                    {...task} 
                    editTask={openEditModal} 
                    deleteTask={openDeletModal} 
                    completeTask = {completeTask}
                    />
                    );

                })}
                </div>
            ) }
            
        </div>
    </article>
    </div>
  )
}

export default TaskManagerReducer
