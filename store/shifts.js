export const state = () => ({
  list: []
})

export const getters = {
  list(state) {
    return state.list
  }
}

export const mutations = {
  add(state, data) {
    state.list = [...state.list, {...data, id: Date.now()}]
  },

  remove(state, data) {
    state.list = state.list.filter(item => item.id !== data.id)
  },

  edit(state, data) {
    state.list = state.list.map(item => item.id === data.id ? data : item)
  }
}
