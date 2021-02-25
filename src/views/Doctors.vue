<template>
  <div>
    <h1>Shifokorlar</h1>
    <hr>
    <input type="text" v-model="doc.title">
    <select v-model="doc.spec">
      <option value="Xirurg">Xirurg</option>
      <option value="Terapevt">Terapevt</option>
      <option value="Lor">Lor</option>
    </select>
    <button @click="add" v-if="btnChange">Qo'sh</button>
    <button @click="save" v-else>Saqla</button>
    <hr>
    <table>
      <tr v-for="(doctor,index) of doctors" :key="index">
        <td>{{doctor.id}}</td>
        <td>{{doctor.title}}</td>
        <td>{{doctor.spec}}</td>
        <td>
          <button @click="del(index)">Delete</button>
          <button @click="edit(index)">Edit</button>
        </td>
      </tr>
    </table>

  </div>
</template>

<script>
export default {
  data(){
    return {
      btnChange:true,
      doc: {
        title: '',
        spec: '',
      }
    }
  },
  methods: {
    edit(index){
      this.btnChange = false
      this.doc = this.doctors[index]
      this.doc.id = this.doctors[index].id
    },
    save(){
      this.$store.dispatch('saveDoctor',this.doc)
    },
    del(index){
      const obj = {
        index: index,
        item: this.doctors[index]
      }
      console.log(obj);
      this.$store.dispatch('delDoctor',obj)
    },
    add(){
      this.$store.dispatch('addDoctor',this.doc)
      this.doc= {
        title: '',
        spec: ''
      }
    }
  },
  computed: {
    doctors(){
      return this.$store.getters.getAllDoctors
    }
  },
  created() {
    this.$store.dispatch('docs')
  }
}
</script>

<style>

</style>