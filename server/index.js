import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './schema'

const PORT = 3000
const app = express()
const endpointURL = '/graphql'
// bodyParser is needed just for POST.
app.use(endpointURL, bodyParser.json(), graphqlExpress({ schema }))
app.get('/graphiql', graphiqlExpress({ endpointURL })) // if you want GraphiQL enabled

app.listen(PORT)
