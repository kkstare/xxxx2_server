const dbConfig = require("./configs/config")

module.exports = class DbBase{
    static _instance = null
    getInstance(){
        if(DbBase._instance == null){
            DbBase._instance = new DbBase()
        }
    }

    sqlPools;

    constructor(){
        this.sqlPools = []
    }

    init(){
        let url = dbConfig.ip
    }

}