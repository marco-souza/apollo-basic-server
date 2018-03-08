class User {
  id
  name
  constructor(name) {
    const id = Math.round(Math.random() * 10000)
    this.id = id
    this.name = name
  }
}

// Maps username to content
var db = {
  users: [
    { name: 'jose', id: 1},
    { name: 'Augusto', id: 3},
    { name: 'Geraldo', id: 2},
    { name: 'Cafú', id: 5},
  ]
};

const resolvers = {
  Query: {
    users() {
      return db.users
    }
  },
  Mutation: {
    user(name) {
      return new User(name)
    }
  }
}

export default resolvers
