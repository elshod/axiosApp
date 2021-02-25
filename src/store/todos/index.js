export default {
  state: {
    todos: [
      {id: 1, text: 'Learn JS', done: true},
      {id: 2, text: 'Do homeworks', done: false},
      {id: 3, text: 'Learn Nodejs', done: true},
    ],
  },
  actions: {
    changeTodo(context,payload){
      context.commit('changeTodo',payload)
    }
  },
  mutations: {
    changeTodo(state,payload){
      state.todos[payload.index] = payload.editObj
      console.log(state.todos[payload.index]);
    }
  },
  getters: {
    getAll(state){
      return state.todos
    },
    getByIndex(state){
      return getId => {
        return state.todos[getId]
      }
    },
    doneToDos(state){
      return state.todos.filter(elem => elem.done)
    },
    newToDo(state){
      return newTodo => {
        state.todos.push(newTodo)
      }
    },
    delTodo(state){
      return indexTodo => {
        state.todos.splice(indexTodo,1)
      }
    },
    doneTodo(state){
      return indexTodo => {
        state.todos[indexTodo].done = true
      }
    },
    getLength(state){
      return state.todos.length
    }
  }

}