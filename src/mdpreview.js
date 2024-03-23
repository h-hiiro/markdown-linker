var sock;
var sock_established=false;

function init(){
    if(sock_established){
        return;
    }

    var meta=document.getElementsByTagName("meta")[1];
    meta.content+=" connect-src ws://localhost:*;";

    try{
        var port=document.getElementById("markdown-linker.port").value;
        sock=new WebSocket("ws://localhost:"+port);
        sock_established=true;

        sock.addEventListener("open", (e)=>{
            console.log("client open");
            sock.send("HELLOWORLD");
        });
        sock.addEventListener("message", (e)=>{
            console.log("message");
            console.log(e);
        });
        console.log("Connection succeeded");

    }catch (e){
        console.log("Connection failed");
    }
}

window.addEventListener("vscode.markdown.updateContent", init);
init();
