import { promises as fs } from 'fs';
import _ from 'lodash';
import path from 'path';

import makeServer from './server';


export default async (port, callback = () => {}) => {
//const readBook = async () => {  
  const data = await fs.readFile(path.resolve(__dirname, 'phonebook.txt'));

  // BEGIN (write your solution here)
  let usersById = {}
  data.trim().split('\n').map(it=>{
      let str = it.split("|")
      usersById[str[0].trim()] = {name:str[1].trim(), phone:str[2].trim()}
    })  
  // END
  //console.log(usersById)
  const server = makeServer(usersById);
  server.listen(port, () => callback(server));
};


