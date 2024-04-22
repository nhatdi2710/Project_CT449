<template>
    <Form
    @submit="submitBook"
    :validation-schema="bookFormSchema"
    method="post"
    >
        <div class="form-group">
            <label for="masach">Mã sách</label>
            <Field name="masach" type="text" class="form-control" v-model="bookLocal.masach"/>
            <ErrorMessage name="masach" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="tensach">Tên sách</label>
            <Field name="tensach" type="text" class="form-control" v-model="bookLocal.tensach"/>
            <ErrorMessage name="tensach" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="tacgia">Tác giả</label>
            <Field
            name="tacgia"
            type="text"
            class="form-control"
            v-model="bookLocal.tacgia"
            />
            <ErrorMessage name="tacgia" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="dongia">Đơn giá</label>
            <Field
            name="dongia"
            type="number"
            class="form-control"
            v-model="bookLocal.dongia"
            />
            <ErrorMessage name="dongia" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="soquyen">Số lượng</label>
            <Field
            name="soquyen"
            type="number"
            class="form-control"
            v-model="bookLocal.soquyen"
            />
            <ErrorMessage name="soquyen" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="namxuatban">Năm xuất bản</label>
            <Field
            name="namxuatban"
            type="number"
            class="form-control"
            v-model="bookLocal.namxuatban"
            />
            <ErrorMessage name="namxuatban" class="error-feedback" />
        </div>
        
        <div class="form-group mt-3">
            <label for="">Nhà xuất bản</label>
            <PCTable 
            v-model="bookLocal.manxb"
            v-if="filteredPCsCount > 0"
            :pcs="filteredPCs"
            />
        </div>
        
        <div class="form-group">
            <button type="submit" class="btn btn-primary mt-4">Lưu</button>
            <button
            v-if="bookLocal._id"
            type="button"
            class="mt-4 btn btn-danger"
            @click="deleteBook"
            >
            Xóa
            </button>
        </div>
    </Form>
</template>

<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";
    import PCTable from "@/components/PCTable.vue";
    import AdminService from "@/services/admin.service";

    export default {
        components: {
        Form,
        Field,
        ErrorMessage,
        PCTable
        },
        emits: ["submit:book", "delete:book"],
        props: {
            book: { type: Object, required: true }
        },
        data() {
            const bookFormSchema = yup.object().shape({
                masach: yup
                    .string()
                    .required("Phải có giá trị."),
                tensach: yup
                    .string()
                    .required("Phải có giá trị.")
                    .min(2, "Phải ít nhất 2 ký tự.")
                    .max(50, "Tên có nhiều nhất 50 ký tự."),
                tacgia: yup
                    .string()
                    .required("Phải có giá trị.")
                    .min(2, "Phải ít nhất 2 ký tự.")
                    .max(50, "Tên có nhiều nhất 50 ký tự."),
                dongia: yup
                    .number()
                    .required("Phải có giá trị.")
                    .min(0, "Phải lớn hơn 0."),
                soquyen: yup
                    .number()
                    .required("Phải có giá trị.")
                    .min(0, "Phải lớn hơn 0."),
                namxuatban: yup
                    .number()
                    .required("Phải có giá trị.")
                    .min(0, "Phải lớn hơn 0."),
                manxb: yup
                    .string()
                    .default("KD"),
                
            });
            return {
                pcs: [],
                bookLocal: this.book,
                bookFormSchema,
            };
        },
        computed: {
            filteredPCs() {
                return this.pcs;
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
            },
            submitBook() {
                this.$emit("submit:book", this.bookLocal);
            },
            deleteBook() {
                this.$emit("delete:book", this.bookLocal.id);
            },
        },
        mounted() {
            this.refreshList();
        },
    };
</script>

<style scoped>
    @import "@/assets/form.css";
</style>