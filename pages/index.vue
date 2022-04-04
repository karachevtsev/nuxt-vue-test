<template>
  <div class="container">
    <div class="row p-5">
      <div class="col-7">
        <div class="d-flex justify-content-between align-items-center">
          <h1>Shifts</h1>
          <b-button variant="primary" @click="edit(null)">Add shift</b-button>
        </div>
        <b-alert v-if="!list.length" show>Shifts list is empty. Click to "Add shift" get started!</b-alert>
        <Shift v-else v-for="shift in list" :key="shift.id" :item="shift" @edit="edit"/>
      </div>
      <div class="col-5">
        <Sidebar v-if="item !== void 0" @saved="saved" :item="item" :key="item && item.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      item: void 0
    }
  },
  computed: {
    ...mapGetters({
      'list': 'shifts/list'
    })
  },
  methods: {
    edit(item) {
      this.item = item;
    },
    saved() {
      this.item = void 0
    }
  }
}
</script>

<style scoped>

</style>
