<style>

    .loan-guide {
        width: 55%;
        text-align: center;
    }

    .loan-info {
        justify-content: space-around;
    }

</style>

<template>
    <BookTable
    v-if="books"
    :books="filteredBooks"
    v-model:activeIndex="activeIndex"
    />

    <p v-else>Bạn chưa chọn quyển sách nào</p>

    <center>
        <p class="mt-4 loan-guide">Để Mượn Sách, bạn cần điền vào thông tin bên dưới và gửi yêu cầu mượn cho Nhân Viên của Libra. Sách sẽ được gửi về địa chỉ của bạn sau khi được nhân viên duyệt.</p>
    </center>

    <div class="row mt-4 loan-info">
        <div class="col-4">
            <label for="ngaymuon" class="form-label">Ngày mượn:</label>
            <input type="date" name="ngaymuon" id="ngaymuon" class="form-control">
        </div>
        <div class="col-4">
            <label for="ngayhentra" class="form-label">Ngày hẹn trả:</label>
            <input type="date" name="ngayhentra" id="ngayhentra" class="form-control">
        </div>
    </div>

    <div class="mt-4 text-center">
        <h5 class="mb-2">Thông Tin Người Mượn</h5>
        <p>Họ và Tên: Đặng Nhật Duy</p>
        <p>Số điện thoại: 0901014368</p>
        <p>Địa chỉ: tp Cần Thơ</p>
    </div>
</template>

<script>
    import BookTable from "@/components/BookTable.vue";
    import UserService from "@/services/user.service";

    export default {
        components: {
            BookTable
        },
        data() {
            return {
                books: [],
                activeIndex: -1,
            };
        },
        computed: {
            bookStrings() {
                return this.books.map((book) => {
                    const { tensach, tacgia, dongia, soquyen, namxuatban, manxb} = book;
                    return [tensach, tacgia, dongia, soquyen, namxuatban, manxb].join("");
                });
            },
            filteredBooks() {
                console.log(this.books);
                return this.books;
            },
            filteredBooksCount() {
                return this.filteredBooks.length;
            },
        },
        methods: {
            async retrieveBooks() {
                try {
                    this.books = await UserService.get(window.location.pathname.split('/')[3]);
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveBooks();
                this.activeIndex = -1;
            },
        },
        mounted() {
            this.refreshList();
        },

    };
</script>