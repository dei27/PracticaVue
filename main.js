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
                {title:'FastFood', img1:'/img/FastFood/1.jpg', img2:'/img/FastFood/2.jpg',img3:'/img/FastFood/3.jpg',img4:'/img/FastFood/4.jpg',img5:'/img/FastFood/5.jpg',img6:'/img/FastFood/6.jpg'},
                {title:'Bebidas', img1:'/img/Bebidas/1.jpg', img2:'/img/Bebidas/2.jpg',img3:'/img/Bebidas/3.jpg',img4:'/img/Bebidas/4.jpg',img5:'/img/Bebidas/5.jpg',img6:'/img/Bebidas/6.jpg'},
                {title:'Postres', img1:'/img/Postres/1.jpg', img2:'/img/Postres/2.jpg',img3:'/img/Postres/3.jpg',img4:'/img/Postres/4.jpg',img5:'/img/Postres/5.jpg',img6:'/img/Postres/6.jpg'}
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

