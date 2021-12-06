import {tasks} from "./sample";

import User from "./models/User";
//import { createSourceEventStream } from "graphql";

export const resolvers = {
    Query:{
        hello: () => {
            return 'Hello world with GRAPHQL'
        },
        greet(root, {name}, ctx){
            console.log(ctx);
            return  `Hellllo ${name}!`;

        },
        tasks(){
            return tasks;
        },
/*         greet: () => {
            return 2;
        }  */
        async Users(){
            const users = await User.find();
            return users;
        }
    },
    Mutation:{
        createTask(_,{input}){
            input._id = tasks.length;
            tasks.push(input);
            return input;
            //console.log(input);
            //return null;            
        },
        async createUser(_,{input}){
            const newUser = new User(input)
            //console.log(newUser);
            await newUser.save();
            //return null;
            return newUser;
        },
        async deleteUser(_, {_id}){
            return await User.findByIdAndDelete(_id);

        },
        async updateUser(_, {_id, input}){
            return await User.findByIdAndUpdate(_id, input, {new:true});

        }


    }
};