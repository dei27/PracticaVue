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
            Menu:[
                {title:'FastFood', img1:'/img/FastFood/1.jpg',nombre1:'Comida 1',descripcion1:'Descripción del platillo 1', img2:'/img/FastFood/2.jpg',nombre2:'Comida 2',descripcion2:'Descripción del platillo 2', img3:'/img/FastFood/3.jpg',nombre3:'Comida 3',descripcion3:'Descripción del platillo 3', img4:'/img/FastFood/4.jpg', nombre4:'Comida 4',descripcion4:'Descripción del platillo 4', img5:'/img/FastFood/5.jpg', nombre5:'Comida 5',descripcion5:'Descripción del platillo 5',img6:'/img/FastFood/6.jpg',nombre6:'Comida 6',descripcion6:'Descripción del platillo 6'},

                {title:'Bebidas', img1:'/img/Bebidas/1.jpg', nombre1:'Bebida 1',descripcion1:'Descripción de la bebida 1', img2:'/img/Bebidas/2.jpg', nombre2:'Bebida 2',descripcion2:'Descripción de la bebida 2',img3:'/img/Bebidas/3.jpg', nombre3:'Bebida 3',descripcion3:'Descripción de la bebida 3',img4:'/img/Bebidas/4.jpg', nombre4:'Bebida 4',descripcion4:'Descripción de la bebida 4',img5:'/img/Bebidas/5.jpg', nombre5:'Bebida 5',descripcion5:'Descripción de la bebida 5',img6:'/img/Bebidas/6.jpg',nombre6:'Bebida 6',descripcion6:'Descripción de la bebida 6'},
                
                {title:'Postres', img1:'/img/Postres/1.jpg', nombre1:'Postre 1',descripcion1:'Descripción del postre 1', img2:'/img/Postres/2.jpg', nombre2:'Postre 2',descripcion2:'Descripción del postre 2',img3:'/img/Postres/3.jpg', nombre3:'Postre 3',descripcion3:'Descripción del postre 3',img4:'/img/Postres/4.jpg',nombre4:'Postre 4',descripcion4:'Descripción del postre 4', img5:'/img/Postres/5.jpg', nombre5:'Postre 5',descripcion5:'Descripción del postre 5',img6:'/img/Postres/6.jpg',nombre6:'Postre 6',descripcion6:'Descripción del postre 6'}
            ]
        }
    },                  
    methods:{
        Change(){
            this.textoMostrar=!this.textoMostrar
        },
        VerMenu(){
            this.mostrarMenu=!this.mostrarMenu
        }
    }
});

app.mount('#app');

