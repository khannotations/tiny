module.exports = {
  db: {
    "name": "db",
    "connector": "memory"
  },
  firestore: {
    "name": "firestore",
    "connector": "loopback-connector-firestore",
    "projectId": "tiny-habits",
    "clientEmail": "tiny-habits@appspot.gserviceaccount.com",
    "privateKey": process.env.TINY_FB_KEY,
    "databaseName": "tiny-habits"
  }
}
