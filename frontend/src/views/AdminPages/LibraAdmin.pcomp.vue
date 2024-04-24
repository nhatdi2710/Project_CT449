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
    
    <div class="mt-4">
        <h2>Tất Cả Nhà Xuất Bản</h2>
        <PCTable 
            v-if="filteredPCsCount > 0"
            :pcs="filteredPCs"
        />

        <p v-else>Không có nhà xuất bản nào.</p>

        <div class="mt-4 row">
            <button class="btn btn-secondary col-1" @click="refreshList()">
                <i class="fas fa-redo"></i> Làm mới
            </button>

            <button class="btn btn--customize col-1" @click="goToAddPC">
                <i class="fa-solid fa-plus"></i> Thêm
            </button>

            <button class="btn btn-warning col-1" @click="goToEditPC">
                <i class="fa-solid fa-pen"></i> Sửa
            </button>

            <button class="btn btn-danger col-1" @click="removeAllPCs">
                <i class="fa-solid fa-trash"></i> Xóa hết
            </button>
        </div>
    </div>
</template>

<script>
    import AdminService from "@/services/admin.service";
    import InputSearch from "@/components/InputSearch.vue";
    import PCTable from "@/components/PCTable.vue";

    export default {
        components: {
            InputSearch,
            PCTable
        },
        data() {
            return {
                pcs: [],
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
            pcStrings() {
                return this.pcs.map((pc) => {
                    const {manxb, tennxb, diachi} = pc;
                    return [manxb, tennxb, diachi].join("");
                });
            },
            filteredPCs() {
                if (!this.searchText) 
                    return this.pcs;

                return this.pcs.filter((_pc, index) =>
                    this.pcStrings[index].includes(this.searchText)
                );
            },
            filteredPCsCount() {
                return this.filteredPCs.length;
            },
        },
        methods: {
            async retrievePCs() {
                try {
                    this.pcs = await AdminService.getAllPCs();
                } catch (error) {
                    console.log(error);
                }
            },
            refreshList() {
                this.retrievePCs();
                this.activeIndex = -1;
            },
            async removeAllPCs() {
                if (confirm("Bạn muốn xóa tất cả nhà xuất bản?")) {
                    try {
                        await AdminService.deleteAllPCs();
                        this.refreshList();
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
            goToAddPC() {
                this.$router.push({ name: "pcomp.add" });
            },
            goToEditPC() {
                const nxbchon = document.querySelector('input[name="nxbchon"]:checked');
                this.$router.push({ name: "pcomp.edit", params: { id: nxbchon.value } });
            },
        },
        mounted() {
            this.refreshList();
        },

    };
</script>