const app = Vue.createApp({
    //acá adentro puede ir todo lo que imaginemos
    //crear un div por ejemplo sería:
    // template: '<div>Esto es una simple prueba</div>
    data(){
        return{
            title: '"Sabor Gourmet"',
            parrafo: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint nisi animi temporibus voluptate iure cupiditate impedit tempora suscipit error doloribus sapiente tenetur quidem exercitationem qui odio odit vitae quae voluptatum debitis laborum, voluptates officiis dolorum eius. Totam laboriosam nisi maiores consequatur possimus in voluptas repellendus consequuntur accusantium! Veritatis doloribus rem ea natus asperiores illum quo inventore iste beatae ipsam.'
        }
    }
});

app.mount('#app');

