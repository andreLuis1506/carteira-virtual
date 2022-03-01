import { addSafe, getAllSafes } from "@/db/Safes";

export const state = () =>{
  return {
    safes: []
  }
}

export const mutations = {
  setSafes: async (state,safes) =>{
    console.log('acontece a mutation?', safes)
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
    console.log('isso aqui ta sendo chamado?', state)
  }
}

export const getters = {
  getSafes: (state) =>{
    return state.safes
  }
}