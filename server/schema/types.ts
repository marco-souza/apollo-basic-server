const schema = `
type User {
    id: ID!
    name: String!
}

type Query {
    users: [User]
}

type Mutation {
    user(name: String!): User
    updateUser(id: ID!, name: String!): User
}
`

export default schema
