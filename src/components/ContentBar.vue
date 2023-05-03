<template>
    <nav>
        <div v-for="category in categories" :key="category.id">
            <router-link :to="`/categories/${category.id}`">{{ category.title }}</router-link>
        </div>
    </nav>
    <main><router-view/></main>
</template>

<script>
export default {
    name: "Category", 
    data() {
        return {
            categories: [
                {id: 'all',title: 'All'},
                {id: '123',title: 'Fabulous Widgets'},
                {id: '456',title: 'Great Widgets'},
                {id: '789',title: 'Ok Widgets'},
            ]
        }
    }
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
    }
}
</style>
