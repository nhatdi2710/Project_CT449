<style>
    .form-page {
        justify-content: center;
    }
    .form-page div {
        width: 400px;
    }
</style>

<template>
    <div class="d-flex form-page">
        <div v-if="pc">
            <h4>Thêm Nhà Xuất Bản Mới</h4>

            <PCForm
            :pc="pc"
            @submit:pc="addPC"
            />

            <p>{{ message }} <a v-if="message != ''" href="/admin/pcomp">Quay lại trang Quản Lý NXB</a></p>
        </div>
    </div>
</template>

<script>
    import PCForm from "@/components/PCForm.vue";
    import adminService from "@/services/admin.service";

    export default {
        components: {
            PCForm,
        },
        data() {
            return {
                pc: { type: Object, required: true },
                message: "",
            };
        },
        methods: {
            async addPC(data) {
                try {
                    await adminService.createPC(data);
                    this.message = "Nhà Xuất Bản đã được thêm.";
                } catch (error) {
                    console.log(error);
                }
            },
        },
    };
    </script>