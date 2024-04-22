<template>
    <div class="d-flex form-page">
        <div v-if="book">
            <h4>Chỉnh Sửa Sách</h4>

            <BookForm
            :book="book"
            @submit:book="updateBook"
            @delete:book="deleteBook"
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
                book: null,
                message: "",
            };
        },
        methods: {
            async getBook() {
                try {
                    this.book = await adminService.getBook(window.location.pathname.split('/')[3]);
                } catch (error) {
                    console.log(error);
                    // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
                    this.$router.push({
                        name: "notfound",
                        params: {
                            pathMatch: this.$route.path.split("/").slice(1)
                        },
                        query: this.$route.query,
                        hash: this.$route.hash,
                    });
                }
            },
            async updateBook(data) {
                try {
                    await adminService.updateBook(this.book._id, data);
                    this.message = "Sách đã được cập nhật. ";
                } catch (error) {
                    console.log(error);
                }
            },
            async deleteBook() {
                if (confirm("Bạn muốn xóa Sách này?")) {
                    try {
                        await adminService.deleteBook(this.book._id);
                        this.$router.push({ name: "bookadmin" });
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
        },
        created() {
            this.getBook();
            this.message = "";
        },
    };
    </script>