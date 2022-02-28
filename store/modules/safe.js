import { addSafe } from "@/db/Safes";

export const actions = {
  add: async ({rootState},{safe}) => {
    await addSafe(rootState.db, safe)
  }
}