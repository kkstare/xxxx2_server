import Agent from "./Agent";

let c2s:any ={
    ["c2s_login"]:(agent:Agent,data:any)=>{
        agent.c2s_login && agent.c2s_login(data);  
    },
    ["c2s_register"]:(agent:Agent,data:any)=>{
        agent.c2s_login && agent.c2s_login(data);  
    }
}


export default c2s;

