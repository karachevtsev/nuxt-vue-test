<template>
  <div class="shift-date">
    <div class="d-flex justify-content-between align-items-center">
      <span>Selected date: {{ data.date.toLocaleDateString() }}</span>
      <b-btn-close @click=""/>
    </div>

    <b-card class="mb-5 bg-secondary text-light">
      <b-form-group
        id="startTime"
        label="Start time"
        label-for="startTime"
      >
        <date-picker
          v-model="data.startTime"
          format="hh:mm a"
          value-type="format"
          type="time"
          placeholder="hh:mm a"
          :inputAttr="{required:true}"
        ></date-picker>
      </b-form-group>

      <b-form-group
        id="endTime"
        label="End time"
        label-for="endTime"
      >
        <date-picker
          v-model="data.endTime"
          format="hh:mm a"
          value-type="format"
          type="time"
          placeholder="hh:mm a"
          :inputAttr="{required:true}"
        ></date-picker>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Price"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="data.price"
          type="number"
          placeholder="Price"
          min="0"
          step="0.01"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Type"
        label-for="shiftType"
      >
        <b-form-select
          id="shiftType"
          v-model="data.type"
          :options="options">

        </b-form-select>
      </b-form-group>

    </b-card>
  </div>
</template>

<script>

import DatePicker from "vue2-datepicker";
import 'vue2-datepicker/index.css'

export default {
  name: "Date",
  components: {
    DatePicker
  },
  data() {
    return {
      data: {}
    }
  },
  created() {
    console.log(this.value);
    this.data = {
      startTime: '',
      endTime: '',
      type: '',
      price: 0,
      ...this.$attrs.value
    };
  },
  computed: {
    options() {
      return [
        {value: null, text: 'Please select a type...'},
        {value: 'consultation', text: 'Consultation'},
        {value: 'telephone', text: 'Telephone'},
        {value: 'ambulance', text: 'Ambulance'},
      ]
    }
  },
  watch: {
    data(value) {
      this.$emit('input', this.data)
    },
    // value: {
    //   handle(value) {
    //     this.data = value ? value : {};
    //   },
    //   immediate: true
    // }
  }
}
</script>

<style scoped>

</style>
