/*import { promises as fs } from 'fs';
import _ from 'lodash';
import path from 'path';

import makeServer from './server';
*/
const {promises: fs} = require('fs');
const path  = require('path');
const server = require('./server.js');

//export default async (port, callback = () => {}) => {
const readBook = async () => {  
  let data = null
  try{
    data = await fs.readFile(path.resolve(__dirname, 'phonebook.txt'), 'utf-8');  
}  catch(err){
    console.log(err)
}
    
  //console.log(data)
  //return
  
  // BEGIN (write your solution here)
  let usersById = {}
  data.trim().split('\n').map(it=>{
      let str = it.split("|")
      usersById[str[0].trim()] = {name:str[1].trim(), phone:str[2].trim()}
    })  
  // END
  //console.log(usersById)
  server.makeServer('Hello from module!')
  
  //const server = makeServer(usersById);
  //server.listen(port, () => callback(server));
};

readBook()


