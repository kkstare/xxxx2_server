import AgentBase from "./AgentBase";

export default class Agent extends  AgentBase{
     constructor(socket:any){
          super(socket)
          console.log("agent")
     }
    
     c2s_login(data:any){
          console.log("agent c2slogin")
     }
     test() {
          console.log("test")
     }
}