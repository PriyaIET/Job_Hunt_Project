import app from "./app.js"

app.listen(process.env.PORT, ()=>{
    console.log(`server listening at port ${process.env.PORT}`)
})