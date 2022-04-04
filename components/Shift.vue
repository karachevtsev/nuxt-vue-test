<template>
  <b-card class="mb-4">
    <h2>{{ item.title }}</h2>
    <p>{{ item.description }}</p>
    <h3>Dates:</h3>
    <ul class="shift-dates-list">
      <li v-for="date in item.dates">
        <b-card class="mb-3 bg-secondary text-light">
          <div class="row">
            <div class="col-3">
              {{ date.date.toLocaleDateString() }}
            </div>
            <div class="col-2">
              {{ date.startTime }}
            </div>
            <div class="col-2">
              {{ date.endTime }}
            </div>
            <div class="col-3">
              {{ date.type }}
            </div>
            <div class="col-2">
              {{ date.price }}
            </div>
          </div>
        </b-card>
      </li>
    </ul>
    <b-button variant="outline-primary" @click="editShift">Edit shift</b-button>
  </b-card>
</template>

<script>
export default {
  name: "Shift",
  props: [
    'item'
  ], methods: {
    editShift() {
      this.$emit('edit', this.item)
    }
  }
}
</script>

<style scoped>
.shift-dates-list {
  list-style: none;
  padding: 0;
}
</style>
