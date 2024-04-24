<template>
    <Form
    @submit="submitPC"
    :validation-schema="pcFormSchema"
    method="post"
    >
        <div class="form-group">
            <label for="manxb">Mã nhà xuất bản</label>
            <Field name="manxb" type="text" class="form-control" v-model="pcLocal.manxb"/>
            <ErrorMessage name="manxb" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="tennxb">Tên nhà xuất bản</label>
            <Field name="tennxb" type="text" class="form-control" v-model="pcLocal.tennxb"/>
            <ErrorMessage name="tennxb" class="error-feedback" />
        </div>

        <div class="form-group">
            <label for="diachi">Địa chỉ</label>
            <Field
            name="diachi"
            type="text"
            class="form-control"
            v-model="pcLocal.diachi"
            />
            <ErrorMessage name="diachi" class="error-feedback" />
        </div>
        
        <div class="form-group">
            <button type="submit" class="btn btn-primary mt-4">Lưu</button>
            <button
            v-if="pcLocal._id"
            type="button"
            class="btn btn-danger mt-4"
            @click="deletePC"
            >
            Xóa
            </button>
        </div>
    </Form>
</template>

<script>
    import * as yup from "yup";
    import { Form, Field, ErrorMessage } from "vee-validate";

    export default {
        components: {
        Form,
        Field,
        ErrorMessage,
        },
        emits: ["submit:pc", "delete:pc"],
        props: {
            pc: { type: Object, required: true }
        },
        data() {
            const pcFormSchema = yup.object().shape({
                manxb: yup
                    .string()
                    .required("Phải có giá trị."),
                tennxb: yup
                    .string()
                    .required("Phải có giá trị.")
                    .min(2, "Phải ít nhất 2 ký tự.")
                    .max(50, "Tên có nhiều nhất 50 ký tự."),
                diachi: yup
                    .string()
                    .required("Phải có giá trị.")
                    .min(2, "Phải ít nhất 2 ký tự.")
                    .max(50, "Tên có nhiều nhất 50 ký tự."),
            });
            return {
                // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
                pcLocal: this.pc,
                pcFormSchema,
            };
        },
        methods: {
            submitPC() {
                this.$emit("submit:pc", this.pcLocal);
            },
            deletePC() {
                this.$emit("delete:pc", this.pcLocal.id);
            },
        },
    };
</script>

<style scoped>
    @import "@/assets/form.css";
</style>