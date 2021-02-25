<template>
  <div>
    <h1>TodoList: {{countTodo}}</h1>
    <input type="text" v-model="title">
    <button @click="addTodo">Add</button>
    <hr>
    <div v-show="isActive">
      <input type="text" v-model="editObj.text">
      <input type="checkbox" v-model="editObj.done">
      <button @click="save(editIndex)">Save</button>
    </div>
    <hr>
    <ul>
      <li 
      v-for="(item,index) of todos" 
      :key="index">
        {{item.id}} | {{item.text}} | {{item.done}} | <button @click="del(index)">del</button> | <button @click="done(index)">done</button> |
        <button @click="change(index)">edit</button>
      </li>
    </ul>
    <hr>
    <ul>
      <li v-for="(item,index) of doneTodos" :key="index">
        {{item.id}} | {{item.text}} | {{item.done}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      title:'',
      editObj:{},
      isActive:false,
      editIndex:0,
    }
  },
  methods: {
    save(index){
      const changeObj = {
        index: index,
        editObj: this.editObj
      }
      this.$store.dispatch('changeTodo',changeObj)
    },
    change(index){
      this.editIndex = index
      this.isActive = true
      this.editObj = this.$store.getters.getByIndex(index)
    },
    addTodo(){
      const nTo = {
          text: this.title,
          done: false,
          id: 4
        }
        this.title = ''
      this.$store.getters.newToDo(nTo)
    },
    del(index){
      this.$store.getters.delTodo(index)
    },
    done(index){
      this.$store.getters.doneTodo(index)
    },
    
  },
  computed: {
    todos(){
      return this.$store.getters.getAll
    },
    countTodo(){
      return this.$store.getters.getLength
    },
    doneTodos(){
      return this.$store.getters.doneToDos
    }
  }
}
</script>
