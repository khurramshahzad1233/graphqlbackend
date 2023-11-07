export const typedef=
`type User{
    id:ID
    name:String
    username:String
    phone:String
    email:String
    webiste:String
}
type Todo{
    id:ID
    title:String
    completed:Boolean
    user:User
}
type Query{
    getTodos:[Todo]
    getAllUsers:[User]
    getUser(id:ID):[User]
}`