<style>
    #login-page {
        justify-content: center;    
        
        margin: 200px 0;
    }

    .login-form {
        width: 400px;

        padding: 28px;
        border-radius: 12px;

        box-shadow: 0px 2px 6px #C7C8CC;

        background-color: #F2EFE5;
    }
</style>

<template>
    <div id="login-page" class="d-flex">
        <form action="" method="post" class="login-form">
            <h4 class="text-center">
                <img height="20px" src="./../assets/imgs/book.png" alt="">
                <br>
                - Chào Mừng Bạn -
            </h4>
            
            <div class="mt-4 row">
                <label for="sdt" class="col-sm-4 col-form-label">Số điện thoại:</label>
                <div class="col-sm-8">
                    <input type="text" class="form-control" id="sdt" name="dienthoai">
                </div>
            </div>
            <div class="mt-2 row">
                <label for="inputPassword" class="col-sm-4 col-form-label">Password:</label>
                <div class="col-sm-8">
                    <input type="password" class="form-control" id="inputPassword" name="password">
                </div>
            </div>

            <div class="text-center">
                <button type="submit" class="btn btn-secondary mt-4" @submit="loginUser()">Đăng Nhập</button>
            </div>
        </form>
    </div>
</template>

<script>
    import UserService from "@/services/user.service";

    export default {
        data() {
            return {
                payload: [],
                message: ""
            }
        },
        computed: {
            isLogged() {

            }
        },
        methods: {
            async loginUser() {
                try {
                    this.payload = await UserService.login();
                } catch(error) {
                    console.log(error);
                }
            }
        }
    }
</script>