function User(name: String) {
    this.id = Math.round(Math.random() * 10000)
    this.name = name
  }

// Maps username to content
let db = {
  users: [
    { name: 'jose', id: 1},
    { name: 'Augusto', id: 3},
    { name: 'Geraldo', id: 2},
    { name: 'Cafú', id: 5},
    { name: 'Cafú', id: 6},
  ]
};

const resolvers = {
  Query: {
    users() {
      return db.users
    }
  },
  Mutation: {
    user (_, { name }) {
      const user = new User(name)
      const users = [
        ...db.users,
        user
      ]
      db.users = users
      return user
    },
    updateUser (_, { id, name }) {
      const users = db.users.map(item => item.id == id
        ? {...item, name }
        : item
      )
      console.log(users)
      db.users = users
      console.log(db.users)
      return { id, name }
    }
  }
}

export default resolvers
