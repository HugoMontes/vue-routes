<template>
    <div>
        <!-- Mediante propiedad del router obtener el dato desde el parametro -->
        <h2>Foto desde componente: {{ $route.params.id }}</h2>
    </div>
</template>

<script>
export default {
    // Adicionar nombre al componente
    name: 'Fotografia'
}
</script>