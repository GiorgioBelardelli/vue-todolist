const { createApp } = Vue;

createApp({
    data(){
        return{
            message: "",
            todos:
            [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    methods: {
        addTask(){
            const newTask = {
                text: this.message,
                done: false
            };
            this.todos.unshift(newTask);
            this.message = "";
        },
        deleteTask(indice){
            this.todos.splice(indice, 1);
        },
        taskOnOff(indice){
            this.todos[indice].done = !this.todos[indice].done;
        }
    }
}).mount("#app")