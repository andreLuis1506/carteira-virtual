import { createDB } from '@/db/Safes'

export const state = () => ({
  db: {}
})

export const mutations ={
  safeDB: async (state, db) => {
    state.db = db
  },
}

export const actions = {
  openDB: async ({commit}) => {
    const db = await createDB() 

    commit('safeDB', db) 
  }
}