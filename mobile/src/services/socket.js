import socketio from 'socket.io-client';

const socket = socketio('http://192.168.1.10:3333' , {
    autoConnect: false,
});

function connect( latitude, longitute, techs){
    socket.io.opts.query ={
        latitude,
        longitute,
        techs,
    };

    socket.connect();
    
    }


function disconnect(){
    if(socket.connected){
        socket.disconnect();

    }

}
  
export {
    connect,
    disconnect,
};