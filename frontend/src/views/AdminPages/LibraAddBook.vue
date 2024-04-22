<style>
    .form-page {
        justify-content: center;
        margin-top: 24px;
    }
    .form-page div {
        width: 400px;
    }
</style>

<template>
    <div class="d-flex form-page">
        <div v-if="book">
            <h4>Thêm Sách Mới</h4>

            <BookForm
            :book="book"
            @submit:book="addBook"
            />

            <p>{{ message }} <a v-if="message != ''" href="/admin/book">Quay lại trang Quản Lý Sách</a></p>
        </div>
    </div>
</template>

<script>
    import BookForm from "@/components/BookForm.vue";
    import adminService from "@/services/admin.service";

    export default {
        components: {
            BookForm,
        },
        data() {
            return {
                book: { type: Object, required: true },
                message: "",
            };
        },
        methods: {
            async addBook(data) {
                try {
                    await adminService.createBook(data);
                    this.message = "Sách đã được thêm. ";
                } catch (error) {
                    console.log(error);
                }
            },
        },
    };
    </script>