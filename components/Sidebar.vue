<template>
  <b-card class="mb-5">
    <b-form @submit.prevent="store">
      <b-form-group id="input-group-title" label="Title" label-for="title">
        <b-form-input
          id="title"
          v-model="data.title"
          type="text"
          placeholder="Tile"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-description" label="Description" label-for="description">
        <b-form-textarea
          id="description"
          v-model="data.description"
          placeholder="Description"
          rows="3"
          maxlength="500"
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-dates" label="Dates" label-for="dates">
        <date-picker
          id="dates"
          v-model="dates"
          class="w-100"
          format="YYYY-MM-DD"
          multiple>
        </date-picker>
      </b-form-group>

      <Date v-for="(item, index) in data.dates" v-model="data.dates[index]" :key="data.dates[index].date.getTime()"/>

      <b-button v-if="this.item" variant="outline-danger" type="button" @click="removeShift">Delete shift</b-button>
      <b-button variant="outline-primary" type="submit">Save shift</b-button>
    </b-form>

  </b-card>
</template>

<script>
import {mapMutations} from 'vuex'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  components: {
    DatePicker
  },
  props: {
    item:{required:false}
  },
  name: "Sidebar",
  data() {
    return {
      data:{
      title: '',
      description: '',
      datePicker: [],
      dates: []
      },
      dates: []
    }
  },
  mounted() {
    this.data = this.item ? {...this.item} : {
      title: '',
      description: '',
      datePicker: [],
      dates: []
    }
    this.dates = this.data.dates.map(date=>date.date)
  },
  watch:{
    dates(value){
      this.data.dates = value.reduce(
        (dates,date) => dates.concat(this.data.dates.find(data=>data.date = date) || {date})
        ,[])
    }
  },
  methods: {
    ...mapMutations({
      editShift: 'shifts/edit',
      addShift: 'shifts/add'
    }),
    store() {
      this.item ? this.editShift(this.data): this.addShift(this.data)
      this.$emit('saved')
    },
    removeShift() {
      this.$store.commit('shifts/remove', this.item)
      this.$emit('saved')
    },
  }
}
</script>

<style scoped>

</style>
