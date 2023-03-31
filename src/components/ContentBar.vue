<template>
    <nav>
        <router-link to="/category1">Category 1</router-link>
        <router-link to="/category2">Category 2</router-link>
        <router-link to="/category3">Category 3</router-link>
    </nav>
    <main><router-view/></main>
</template>

<style lang="scss">
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
