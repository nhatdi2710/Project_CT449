<template>
    <div class="d-flex form-page">
        <div v-if="pc">
            <h4>Chỉnh Sửa Nhà Xuất Bản</h4>

            <PCForm
            :pc="pc"
            @submit:pc="updatePC"
            @delete:pc="deletePC"
            />

            <p>{{ message }} <a v-if="message != ''" href="/admin/pcomp">Quay lại trang Quản Lý Sách</a></p>
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
                pc: null,
                message: "",
            };
        },
        methods: {
            async getPC() {
                try {
                    this.pc = await adminService.getPC(window.location.pathname.split('/')[3]);
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
            async updatePC(data) {
                try {
                    await adminService.updatePC(this.pc._id, data);
                    this.message = "NXB đã được cập nhật. ";
                } catch (error) {
                    console.log(error);
                }
            },
            async deletePC() {
                if (confirm("Bạn muốn xóa NXB này?")) {
                    try {
                        await adminService.deletePC(this.pc._id);
                        this.$router.push({ name: "pcompadmin" });
                    } catch (error) {
                        console.log(error);
                    }
                }
            },
        },
        created() {
            this.getPC();
            this.message = "";
        },
    };
    </script>