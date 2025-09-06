class Agent {
    constructor(name, version){
        this.name = name;
        this.version = version;
    }

    getStatus(){
        return `Name: ${this.name}, Version: ${this.version}`;
    }
}

class FieldAgent extends Agent {
    constructor(name,version,location){
        super(name, version);
        this.location = location;
    }

    getStatus(){
        return `${super.getStatus()}, Location: ${this.location}`;
    }

    static  latestVersion(a1, a2) {
        return a1.version > a2.version ? v1 : v2;
    }
}