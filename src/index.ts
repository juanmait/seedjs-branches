import { createServer, IncomingMessage, ServerResponse } from 'http'

const server = createServer((_req: IncomingMessage, res: ServerResponse) => {
  res.end('hello')
})

server.listen(3000, () => {
  console.log('server listening on 3000') //tslint:disable-line
})
