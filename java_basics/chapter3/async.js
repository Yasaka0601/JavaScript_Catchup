new Promise((resolve,reject) => {
    reject()
}).then(() => {
    console.log("resolveが実行されてthenの処理が動きました")
})
  .catch(() => {
    console.log("rejectが実行されてcatchの処理が動きました")
  })