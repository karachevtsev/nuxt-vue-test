const mockState = () => {
  return {
    list: [
      {
        id: Date.now(),
        title: "labore",
        description: "Sit exercitation ipsum magna deserunt laboris aliquip commodo adipisicing amet dolor sint incididunt pariatur.",
        dates: [
          {
            date: "2022-01-03T22:00:00.000Z",
            startTime: "2022-01-03T22:01:30.000Z",
            endTime: "2022-01-03T22:05:00.000Z",
            price: 100,
            type: "Telephone"
          },
          {
            date: "2022-01-03T22:00:00.000Z",
            startTime: "2022-01-03T22:06:00.000Z",
            endTime: "2022-01-03T22:10:00.000Z",
            price: 200,
            type: "Telephone"
          },
        ]
      }
    ]
  };
};


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
