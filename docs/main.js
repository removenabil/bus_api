var app = new Vue({
    el: ".app",

    data: {
        bus_stop_code: 27301,
        data: []
    },

    methods: {
        getData() {
            fetch("https://arrivelah.herokuapp.com/?id=" + this.bus_stop_code)
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    this.data = data;
                })
        }
    },

    mounted(){
        this.getData()
    }

})