import { openDB, deleteDB, wrap, unwrap } from 'idb';


const dbName = 'virtual-wallet'
const version = 1

export async function createDB() {
  const db = await openDB(dbName, version, {
    upgrade(db) {
      const store = db.createObjectStore('safes', {
        keyPath: 'id',
        autoIncrement: true,
      })
      store.createIndex('name', 'name')
      store.createIndex('description', 'description')
      store.createIndex('total', 'total')
    }
  });
  return db
}

export async function addSafe(db, safe){
  db.add('safes', safe)
}

export async function getAllSafes(db){
  return await db.getAll('safes')
}


export async function editSafe(db, safe, key){
  return await db.put('safes', safe)
}