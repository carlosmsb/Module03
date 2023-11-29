//const message = {
//    name: 'Zak Ruvalcaba',
//    role: 'Instructor'
//}

class Message {
    constructor(name, role) {
        this.name = name
        this.role = role
    }

    sayHello() {
        console.log(`Hello world. My name is ${this.name} and I am the ${this.role}.`)
    }
}

//export { Message }
export default Message
//module.exports = Message