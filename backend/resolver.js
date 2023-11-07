import {TODOS} from "./todo.js"
import {USERS} from"./user.js"
export const resolver= {
    Todo:{
        user:(todo)=>USERS.find((e)=>e.id===todo.id),
    },
    Query:{
        getTodos:()=>TODOS,
        getAllUsers:()=>USERS,
        getUser:async(parent, {id})=>USERS.find((e)=>e.id===id),
    },
}