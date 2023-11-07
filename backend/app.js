import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import {ApolloServer} from "@apollo/server";
import {expressMiddleware} from "@apollo/server/express4";
import {ApolloServerPluginDrainHttpServer} from "@apollo/server/plugin/drainHttpServer"
import http from "http"

import {typedef} from "./typedef.js";
import {resolver} from "./resolver.js";

const app=express();
const httpServer=http.createServer(app)

const server=new ApolloServer({
    typeDefs: typedef,
    resolvers: resolver,
    plugins:[ApolloServerPluginDrainHttpServer({httpServer})]
});
await server.start();


app.use(cors());
app.use(bodyParser.json());
app.use("/graphql", expressMiddleware(server,{
    context:async({req})=>({token:req.headers.token}),
}));

await new Promise((resolve)=>httpServer.listen({port:4000},resolve))

console.log(`🚀 Server ready at http://localhost:4000/graphql`);






export default app;