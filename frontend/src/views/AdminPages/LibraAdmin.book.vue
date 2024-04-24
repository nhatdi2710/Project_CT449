<style>
    i {
        font-size: 14px;
    }

    .btn {
        margin: 0 12px;
    }

    .btn--customize {
        background-color: #C0D6E8;
    }
    .btn--customize:hover {
        background-color: #9cbeda;
    }
</style>

<template>
    <div class="mt-4">
        <InputSearch v-model="searchText" />
    </div>
    
    <div class="mt-4 all-book">
        <h2>Sách Trên Kệ</h2>
        <BookTable 
            v-if="filteredBooksCount > 0"
            :books="filteredBooks"
            v-model:activeIndex="activeIndex"
        />

        <p v-else>Không có quyển sách nào.</p>

        <div class="mt-4 row">
            <button class="btn btn-secondary col-1" @click="refreshList()">
                <i class="fas fa-redo"></i> Làm mới
            </button>

            <button class="btn btn--customize col-1" @click="goToAddBook">
                <i class="fa-solid fa-plus"></i> Thêm
            </button>

            <button class="btn btn-warning col-1" @click="goToEditBook">
                <i class="fa-solid fa-pen"></i> Sửa
            </button>

            <button class="btn btn-danger col-1" @click="removeAllBooks">
                <i class="fa-solid fa-trash"></i> Xóa hết
            </button>
        </div>
    </div>

    <div class="mt-4">
        <h2>Sách Đang Được Mượn</h2>
    </div>
</template>

<script>
    import AdminService from "@/services/admin.service";
    import InputSearch from "@/components/InputSearch.vue";
    import BookTable from "@/components/BookTable.vue";

    export default {
        components: {
            InputSearch,
            BookTable
        },
        data() {
            return {
                books: [],
                activeIndex: -1,
                searchText: "",
            };
        },
        watch: {
            // Giám sát các thay đổi của biến searchText.
            // Bỏ chọn phần tử đang được chọn trong danh sách.
            searchText() {
                this.activeIndex = -1;
            },
        },
        computed: {
            bookStrings() {
                return this.books.map((book) => {
                    const { tensach, tacgia, dongia, soquyen, namxuatban, manxb} = book;
                    return [tensach, tacgia, dongia, soquyen, namxuatban, manxb].join("");
                });
            },
            filteredBooks() {
                if (!this.searchText) 
                    return this.books;

                return this.books.filter((_book, index) =>
                    this.bookStrings[index].includes(this.searchText)
                );
            },
            activeBook() {
                if (this.activeIndex < 0) 
                    return null;

                return this.filteredBooks[this.activeIndex];
            },
            filteredBooksCount() {
                return this.filteredBooks.length;
            },
        },
        methods: {
            async retrieveBooks() {
                try {
                    this.books = await AdminService.getAllBooks();
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveBooks();
                this.activeIndex = -1;
            },
            async removeAllBooks() {
                if (confirm("Bạn muốn xóa tất cả sách?")) {
                    try {
                        await AdminService.deleteAllBooks();
                        this.refreshList();
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            goToAddBook() {
                this.$router.push({ name: "book.add" });
            },
            goToEditBook() {
                const sachchon = document.querySelector('input[name="sachchon"]:checked');
                this.$router.push({ name: "book.edit", params: { id: sachchon.value } });
            },
        },
        mounted() {
            this.refreshList();
        },

    };
</script>