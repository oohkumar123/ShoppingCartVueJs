<template>
    <nav>
        <div v-for="category in this.$store.getters.getCategories" :key="category.id">
            <router-link :to="`/categories/${category.id}`">{{ category.title }}</router-link>
        </div>
    </nav>
    <main><router-view/></main>
</template>

<script>
export default {
    name: "Category"
}
</script>

<style lang="scss" scoped>
nav {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: white;
    font-size: 14px;
    gap:10px;
    padding: 10px 10px 10px 20px;
    a {
        color:white;
        text-decoration: none;
        &.router-link-active {
            color:black;
        }
        &.router-link-active:before {
            content: ">> "
        }
    }

}
</style>
