let express = require("express")
let expressWs = require("express-ws")

import Agent from "./net/Agent"
let app = express()
expressWs(app)

let clientCount = 0

let arrWs = []

// app.get('/' , (req:any , res:any)=>{
//    res.send('hello from simple server :)')
// })
app.ws("/",function(ws:any,req:any){

    console.log("连接成功")

    clientCount++
    // ws.nickname = "user"+clientCount
    arrWs.push(ws)
    let agent = new Agent(ws)
    agent.init()
    // ws.on("message",function(str:any){
    //     console.log(str)
    //     // broadcast(conn.nickname+":"+str)
    //     // ws.send(ws.nickname+":"+str)
    //     // wsBroadcast(ws.nickname+":"+str)

    //     // ws.broadcast(ws.nickname+":"+str)
    // })
    
    
})

app.listen(3000)

// let server = ws.createServer(function(conn){
//     console.log("open new conn ")
//     clientCount++
//     conn.nickname = "user"+clientCount

//     conn.on("text",function(str){

//         console.log(conn.nickname+":"+str)
//         broadcast(conn.nickname+":"+str)

//     })

//     conn.on("close", function (code, reason) {
//      console.log(conn.nickname + 'left')
//         broadcast(conn.nickname + 'left')


//     })
//  conn.on("error", function (err) {
//      console.log("Hand error")
//      console.log(err)
//     })

// }).listen(3000)



