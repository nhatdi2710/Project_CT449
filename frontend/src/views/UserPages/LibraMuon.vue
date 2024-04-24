<style>
    .btn--group {
        justify-content: center;
    }
</style>
<template>
    <h2 class="mt-4">Sách Đã Chọn</h2>

    <LoanForm />

    <div class="mt-4 row btn--group">
        <button class="btn btn-danger col-1" @click="returnHome()">
            Hủy
        </button>

        <button class="btn btn--customize col-1" @click="gotoMuon()">
            Xác nhận
        </button>
    </div>
</template>

<script>
    // import UserService from "@/services/user.service";
    import LoanForm from "@/components/LoanForm.vue";

    export default {
        data() {
            return {
                books: []
            }
        },
        components: {
            LoanForm
        },
        methods: {
            returnHome() {
                this.$router.push({ name: "indexuser" });
            },
        }
    }
</script>