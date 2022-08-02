const express=require('express')
const path=require('path')
const app=express()
const server=require('http').createServer(app)
const io=require('socket.io')(server)
app.use(express.static(path.join(__dirname+'/public')))

io.on('connection',function(socket){
    socket.on('newuser',function(username){
        socket.broadcast.emit("update",username +" joined the conversation");
    })
    socket.on('exituser',function(username){
        socket.broadcast.emit("update",username +" left the conversation");
    })
    socket.on('chat',function(message){
        socket.broadcast.emit("chat",message);
    })
})






server.listen(5000)

/* <div class="message my-message">
                    <div>
                        <div class="name">You</div>
                        <div class="text">Hi</div>
                    </div>
                </div>
                <div class="update">
                    ABC joined the Conversation
                </div>

                <div class="message other-message">
                    <div>
                        <div class="name">ABC</div>
                        <div class="text">Hi</div>
                    </div>
                </div> */