<template>
    <div>
        <h1>Galeria de fotos</h1>
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
    }
}
</script>