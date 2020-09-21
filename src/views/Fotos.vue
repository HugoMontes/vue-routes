<template>
    <div>
        <h1>Galeria de fotos</h1>

        <!-- 2) Recorrer el arreglo generando botontes -->
        <!-- en to recibe un objeto {nombreRuta, parametros} -->
        <router-link v-for="(item, index) of fotosArreglo"
                     :key="index"
                     :to="{name: 'fotos', params: {id: item}}">
            <button>foto {{ item }}</button>
        </router-link>

        <!-- 3) Invocar al componente -->
        <Fotografia></Fotografia>

        <!-- 5) Adicionar los botones invocando a los metodos -->
        <button @click="goHome">Home</button>
        <button @click="anterior">Anterior</button>
        <button @click="siguiente">Siguiente</button>
    </div>
</template>

<script>
// 1) Importar el componente de fotografia
import Fotografia from '@/components/Fotografia.vue';
export default {
    components: {
        // 2) Agregar el componente importado para usarlo como etiqueta
        Fotografia
    },
    // 1) Agregar un arreglo de numeros que representen nombre de una foto
    data() {
        return {
            fotosArreglo: [1, 2, 3, 4] 
        }
    },
    // 1) Crear los metodos para navegar mediante los botones
    methods: {
        // 2) Metodo para ir la pagina de inicio
        goHome: function(){
            // Metodo push de router recibe como argumento la ruta
            this.$router.push('/');
        },
        // 3) Metodo para ir una pagina anterior
        anterior: function(){
            // Accedemos a una pagina anterior del historial
            this.$router.go(-1);
        },
        // 4) Metodo para ir una pagina siguiente del historial
        siguiente: function(){
            // Accedemos la pagina siguiente del historial
            this.$router.go(1);
        }
    }
}
</script>