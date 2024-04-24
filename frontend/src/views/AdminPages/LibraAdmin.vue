<style>
    .manage-list,
    .manage-user {
        margin: 48px 0;
    }

    .cards {
        justify-content: space-around;
        margin-top: 24px;
    }

    .card {
        padding: 0;
    }

    .btn--customize {
        background-color: #C0D6E8;
    }
    .btn--customize:hover {
        background-color: #9cbeda;
    }
</style>
<template>
    <div class="manage-list">
        <div class="mt-4">
            <h2 class="text-center">Danh Mục Quản Lý</h2>
        </div>

        <div class="row cards">
            <div class="card col-5">
                <img src="./../../assets/imgs/bookm.jpg" class="card-img-top" alt="...">
                
                <div class="card-body">
                    <h5 class="card-title">Quản lý sách</h5>
                    <p class="card-text">Bạn có thể thực thiện các thao tác như: Thêm Sách, Sửa Sách, Xóa Sách tại đây.</p>
                    <a href="/admin/book" class="btn btn--customize">Đến trang</a>
                </div>
            </div>

            <div class="card col-5">
                <img src="./../../assets/imgs/pc.jpg" height="365.6px" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Quản lý Nhà Xuất Bản</h5>
                    <p class="card-text">Bạn có thể thực thiện các thao tác như: Thêm nhà xuất bản, Sửa nhà xuất bản, Xóa nhà xuất bản tại đây.</p>
                    <a href="/admin/pcomp" class="btn btn--customize">Đến trang</a>
                </div>
            </div>
        </div>
    </div>

    <div class="manage-user">
        <h2>Danh Sách Độc Giả</h2>

        <UsersTable 
            v-if="filteredUsersCount > 0"
            :users="filteredUsers"
            v-model:activeIndex="activeIndex"
        />
    </div>
</template>

<script>
    import AdminService from "@/services/admin.service";
    import UsersTable from "@/components/UsersTable.vue";

    export default {
        components: {
            UsersTable
        },
        data() {
            return {
                users: [],
                activeIndex: -1,
                searchText: "",
            };
        },
        computed: {
            filteredUsers() {
                return this.users;
            },
            filteredUsersCount() {
                return this.filteredUsers.length;
            },
        },
        methods: {
            async retrieveUsers() {
                try {
                    this.users = await AdminService.getAllUsers();
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrieveUsers();
                this.activeIndex = -1;
            },
        },
        mounted() {
            this.refreshList();
        },

    };
</script>