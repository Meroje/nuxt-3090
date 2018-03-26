<template>
    <div>Mapping: {{client.mapping}}</div>
</template>

<script>
import Model from '~/models/Client';
export default {
    data() {
        return {
            client: new Client(),
        }
    }
}
</script>
