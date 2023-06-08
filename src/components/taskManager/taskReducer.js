
export const taskReducer =(state, action)=>{

    if(action.type ==="EMPTY_FIELD"){
      return {
        ...state,
        isAlertOpen: true,
        alertContent:"Please enter name and date",
        alertClass:"danger"
      }
    }if(action.type === "CLOSE_ALERT"){
      return {...state, isAlertOpen: false};
    }
    if(action.type === "ADD-TASK"){
      // console.log(action.payload)
      const allTask = [...state.tasks, action.payload]
      return {...state,tasks:allTask, isAlertOpen:true, alertContent:"Task added successfully", alertClass:"success"}
      
    }
    if(action.type === "OPEN-EDIT-MODAL"){
      return {...state,
        taskID: action.payload,
        isEditModalOpen: true,
        modalTitle : "Edit Task",
        modalMsg : "You are about to edit this task",
        modalActionText: "Edit",
    }
    }
    if(action.type=== "EDIT-TASK"){
      return {...state, isEditing: true}
    }

    if( action.type === "CLOSE-MODAL"){
      return {...state, isEditModalOpen: false,
      isDeleteModalOpen: false}
    }

    if(action.type === "UPDATE-TASK"){
  
      const updateTask = action.payload 
      const id = action.payload.id

      //find the task index
      const taskIndex = state.tasks.findIndex((task)=>{
        return task.id === id
      })
      //replace teh task by its index:
      if(taskIndex !== -1){  // if teh taskIndex exists

        state.tasks[taskIndex] = updateTask
      } 

      return {...state, 
        isEditing: false,
        isAlertOpen: true,
        alertContent: "Task edited successfully",
        alertClass : "success"
      }


    }

    if(action.type === "OPEN-DELETE-MODAL"){

      return {...state,
      taskID: action.payload,
      isDeleteModalOpen: true,
      modalTitle : "Delete Task",
      modalMsg : "You are about to delete a task",
      modalActionText: "Delete",

    }
      
    }
    if(action.type ==="DELETE_TASK"){
      const id  = action.payload
      const newTasks = state.tasks.filter((task)=> task.id !== id)

      return {
        ...state,
        tasks: newTasks,
        isAlertOpen: true,
        alertContent: "Task deleted successfull",
        alertClass: "success",
        isDeleteModalOpen: false
      }
    }

    if( action.type === "COMPLETE_TASK"){
      const id = action.payload;
      // find the task index
      const taskIndex = state.tasks.findIndex((task)=>{
        return task.id === id;
      })

      let updatedTask = {
        id,
        name: state.tasks[taskIndex].name,
        date: state.tasks[taskIndex].date,
        complete: true
      }

      if(taskIndex !== -1){
        state.tasks[taskIndex] = updatedTask
      }

      return {
        ...state,
        isAlertOpen: true,
        alertContent : "Task completed",
        alertClass : "success"
      }
    }
    return state;

}
