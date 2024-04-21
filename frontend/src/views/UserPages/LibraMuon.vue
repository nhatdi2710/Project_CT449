<template>
    <LoanForm />
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
        }
    }
</script>