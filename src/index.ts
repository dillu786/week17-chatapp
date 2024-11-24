import {  WebSocketServer,WebSocket } from "ws";

const wss = new WebSocketServer({port:8080});
let userCount = 0;
let allSockets:WebSocket[] = [];
wss.on("connection",(ws)=>{
    allSockets.push(ws);
    console.log("user connected  #"+userCount);
    userCount +=1;
    ws.on("message",(data)=>{
            console.log("message received from client "+data);

            allSockets.forEach(a=> a.send("message sent from server "+data));
            //ws.send("message sent from server "+data);
    })
})