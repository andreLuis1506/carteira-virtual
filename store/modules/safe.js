import { addSafe, editSafe, getAllSafes, deleteSafe } from "@/db/Safes";

export const state = () =>{
  return {
    safes: []
  }
}

export const mutations = {
  setSafes: async (state,safes) =>{
    state.safes = safes
  }
}

export const actions = {
  add: async ({rootState, dispatch},{safe}) => {
    await addSafe(rootState.db, safe)
    .then(()=>{
      dispatch('list')
    })
  },
  list: async ({commit, rootState, state}) => {
    const safes = await getAllSafes(rootState.db)
    commit('setSafes', safes)
  },
  editSafe: ({rootState, dispatch}, {safe, id}) => {
    editSafe(rootState.db, safe, id)
    dispatch('list')
  },
  deleteSafe: ({rootState, dispatch}, {id}) => {
    deleteSafe(rootState.db, id)
    dispatch('list')
  }
}

export const getters = {
  totalInWallet: (state) =>{
    let total = 0
    state.safes.forEach(element => {
      total = total + parseFloat(element.total)
      console.log('total',total)
    });
    return total
  }
}