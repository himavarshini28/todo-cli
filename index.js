#!/usr/bin/env node
const { Command } = require('commander');
const fs = require('fs');
const program = new Command();

program
  .name('todo')
  .description('CLI to manage your todo list')
  .version('0.8.0');

program.command('add')
  .description('add a todo item')
  .argument('<string>', 'todo item to add')
  .action((string)=>{
    fs.readFile('todo.json',"utf8",(err,data)=>{
      const todos = JSON.parse(data || '[]');
      const addTodo=
      {
        id:todos.length+1,
        title: string,
        completed:false,
      }
      todos.push(addTodo);
      fs.writeFile('todo.json',JSON.stringify(todos), (err)=>{
        if(err){
          console.log('Error writing to file', err);
        }else{
          console.log(`Added todo: ${string}`);
        }
      })

    })
  })

  program.command('delete')
  .description('delete a todo item')
  .argument('<id>', 'id of todo item to delete')
  .action((id)=>{
    fs.readFile('todo.json',"utf8",(err,data)=>{
      const todos = JSON.parse(data || '[]');
      const{match,rest}=todos.reduce((acc,todo)=>{
        if(todo.id==id){
          acc.match=todo;
        }
        else{
          acc.rest.push(todo);
        }
        return acc;
      },{match:null,rest:[]});   
      let count=0;
      rest.forEach((todo)=>{
        todo.id=count+1;
        count+=1;
      })
      fs.writeFile('todo.json',JSON.stringify(rest), (err)=>{
        if(err){
          console.log('Error deleting a file', err);
        }else{
          console.log(`Todo deleted: ${match.title}`);
        }
      })

    })
  })

  program.command('list')
  .description('list all todo items')
  .action(()=>{
    fs.readFile('todo.json',"utf8",(err,data)=>{
        const todos=  JSON.parse(data || '[]');
        if(todos.length==0){
          console.log('No todos found');
        }
        else{
          todos.forEach((todo)=>{
            console.log(`${todo.id} | ${todo.title} | ${todo.completed}`);
          })
        }
      },
  )})

  program.command('complete')
  .description('mark a todo item as completed')
  .argument('<id>', 'id of todo item to complete')
  .action((id)=>{
    fs.readFile('todo.json',"utf8",(err,data)=>{
        const todos=  JSON.parse(data || '[]');
        todos.forEach((todo)=>{
          if(todo.id==id){
            todo.completed=true;
            console.log(`Todo completed: ${todo.title}`);
          }})
          fs.writeFile('todo.json',JSON.stringify(todos),(err)=>{
            if(err){
              console.log('Error writing to file', err);
            }else{
              
            }
          })
        })
    
      },
  )

  program.command('incomplete')
  .description('list all incomplete todo items')
  .action((i)=>{
    fs.readFile('todo.json',"utf8",(err,data)=>{
        const todos=  JSON.parse(data || '[]');
        todos.forEach((todo)=>{
          if(!todo.completed){
            console.log(`${todo.id} | ${todo.title} | ${todo.completed}`);
          }
        })
      })
      },
  )




program.parse();