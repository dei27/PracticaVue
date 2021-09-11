const app = Vue.createApp({
    //acá adentro puede ir todo lo que imaginemos
    //crear un div por ejemplo sería:
    // template: '<div>Esto es una simple prueba</div>
    data(){
        return{
            title: 'Framework Vue',
            edad:60
        }
    }
});

app.mount('#app');

