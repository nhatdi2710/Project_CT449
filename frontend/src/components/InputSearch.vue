<style>
    .search-box {
        max-width: 400px;
    }
</style>

<template>
    <center>
        <h2>Tìm Kiếm</h2>
        <div class="input-group search-box">
            <input type="text" class="form-control" placeholder="Nhập thông tin cần tìm":value="modelValue" @input="updateModelValue" @keyup.enter="submit" aria-label="" aria-describedby="button-addon2"/>
            <button
                class="btn btn-outline-secondary"
                id="button-addon2"
                type="button"
                @click="submit"
            >
                <i class="fas fa-search"></i>
            </button>
        </div>
    </center>
</template>

<script>
export default {
    props: {
        modelValue: { type: String, default: "" },
    },
    emits: ["submit", "update:modelValue"],
    methods: {
        updateModelValue(e) {
            this.$emit("update:modelValue", e.target.value);
        },
        submit() {
            this.$emit("submit");
        },
    },
};

</script>