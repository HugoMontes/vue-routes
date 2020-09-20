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
    }
}
</script>