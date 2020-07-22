import http from 'http';

export default (usersById) => http.createServer((request, response) => {
  request.on('end', () => {
    if (request.url === '/') {
      const messages = [
        'Welcome to The Phonebook',
        `Records count: ${Object.keys(usersById).length}`,
      ];
      response.end(messages.join('\n'));
    } else if (request.url.startsWith('/search')) {
      // BEGIN (write your solution here)
      const url = new URL(request.url, `http://${request.headers.host}`);
      const q = url.searchParams.get('q');
      if(q===""){
        response.end('');
      }
      else{
        //for(let it of usersById)
        Objects.values(usersById).map(({name, phone})=>{
          if(name.indexOf(q)!==-1){
            response(`${name}, ${phone}\n`)
          }
        })
      }
      // END
    }
  });

  request.resume();
});
