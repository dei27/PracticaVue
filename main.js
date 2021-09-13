const app = Vue.createApp({
    //acá adentro puede ir todo lo que imaginemos
    //crear un div por ejemplo sería:
    // template: '<div>Esto es una simple prueba</div>
    data(){
        return{
            textoMostrar:true,
            mostrarMenu:true,
            title: '"Sabor Gourmet"',
            text1:'Lorem ipsum dolor sit amet consectetur adipisicing',
            text2:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sint nisi animi temporibus voluptate iure cupiditate impedit tempora suscipit error doloribus sapiente tenetur quidem exercitationem qui odio odit vitae quae voluptatum debitis laborum, voluptates officiis dolorum eius. Totam laboriosam nisi maiores consequatur possimus in voluptas repellendus consequuntur accusantium! Veritatis doloribus rem ea natus asperiores illum quo inventore iste beatae ipsam.',
            text3: 'Leer más...',
            text4: 'Leer menos...',
            num:0,
            Menu:
            [
                {
                    title:'FastFood',
                    nombres:['Comida 1', 'Comida 2', 'Comida 3', 'Comida 4', 'Comida 5', 'Comida 6'],
                    imgs:['/img/FastFood/1.jpg','/img/FastFood/2.jpg','/img/FastFood/3.jpg','/img/FastFood/4.jpg','/img/FastFood/5.jpg','/img/FastFood/6.jpg'],
                    description:['Descripción del platillo 1','Descripción del platillo 2','Descripción del platillo 3','Descripción del platillo 4','Descripción del platillo 5','Descripción del platillo 6']
                },

                {
                    title:'Bebidas',
                    nombres:['Bebidas 1', 'Bebidas 2', 'Bebidas 3', 'Bebidas 4', 'Bebidas 5', 'Bebidas 6'],
                    imgs:['/img/Bebidas/1.jpg','/img/Bebidas/2.jpg','/img/Bebidas/3.jpg','/img/Bebidas/4.jpg','/img/Bebidas/5.jpg','/img/Bebidas/6.jpg'],
                    description:['Descripción de Bebida 1','Descripción de Bebida 2','Descripción de Bebida 3','Descripción de Bebida 4','Descripción de Bebida 5','Descripción de Bebidas 6']
                },

                {
                    title:'Postres',
                    nombres:['Postres 1', 'Postres 2', 'Postres 3', 'Postres 4', 'Postres 5', 'Postres 6'],
                    imgs:['/img/Postres/1.jpg','/img/Postres/2.jpg','/img/Postres/3.jpg','/img/Postres/4.jpg','/img/Postres/5.jpg','/img/Postres/6.jpg'],
                    description:['Descripción del Postre 1','Descripción del Postre 2','Descripción del Postre 3','Descripción del Postre 4','Descripción del Postre 5','Descripción del Postre 6']
                },
            ],
            
        }
    },                  
    methods:{
        change(){
            this.textoMostrar=!this.textoMostrar
        },
        VerMenu(){
            this.mostrarMenu=!this.mostrarMenu
        }  
    }
});

app.mount('#app');

