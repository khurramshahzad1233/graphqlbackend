import {TODOS} from "./todo.js"
import {USERS} from"./user.js"
export const resolver= {
    Todo:{
        user:(todo)=>USERS.find((e)=>e.id===todo.id),
    },
    Query:{
        getTodos:()=>TODOS,
        getAllUsers:()=>USERS,
        getUser(parent, args,contextValue,info){
            return USERS.find((user)=>user.id===args.id)
        },
    },
}