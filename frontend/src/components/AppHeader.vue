<style>
    #header {
        padding: 12px;
        justify-content: space-between;
        
        background-color: #C0D6E8;
    }

    #header a {
        text-decoration: none;
        color: #212529;
        margin: 0 8px;

        padding-top: 2px;
    }
</style>

<template>
    <header id="header" class="d-flex">
        <div class="nav">
            <img height="32px" src="./../assets/imgs/book.png" alt="">
            <a v-bind:href="indexHref">Trang chủ</a>
            <a v-bind:href="loanHref">Mượn sách</a>
        </div>

        <a href="/login">Đăng xuất</a>
    </header>
</template>

<script>
    export default {
        computed: {
            indexHref() {
                return '/' + this.$route.path.split('/')[1];
            },
            loanHref() {
                return '/' + this.$route.path.split('/')[1] + '/muonsach';
            }
        }
    }
</script>