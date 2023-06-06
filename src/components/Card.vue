<script>
export default {
    name: "Card",
    props: {
        details: Object
    }
}
</script>
<template>
    <div class="card">
        <div class="details-card">
            <div><img :src="details.card_images[0].image_url" alt=""></div>
            <h4>{{ details.name }}</h4>
            <p v-if="details.archetype">{{ details.archetype }}</p>
            <p v-else>Other</p>
        </div>
    </div>
</template>
<style lang="scss">
@use './../styles/partials/variables.scss' as *;

.card {
    width: 17%;
    margin: 20px 15px;
    background-color: $main-color;


    .details-card {

        text-align: center;

        h4 {
            color: $white;
            padding: 5px;
            margin-bottom: 5px;
            text-transform: uppercase;
            font-size: 0.8rem;
        }

        p {
            margin-bottom: 10px;
        }
    }


}
</style>