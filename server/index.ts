import * as express from 'express'
import * as bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './schema'

const PORT = 13000
const app = express()
const endpointURL = '/graphql'
// bodyParser is needed just for POST.
app.use(endpointURL, bodyParser.json(), graphqlExpress({ schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL })) // if you want GraphiQL enabled

app.listen(PORT)
console.log('App');
