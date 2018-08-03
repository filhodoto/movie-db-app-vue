<template>
    <div class="pagination-container text-xs-center">
        <v-pagination
                v-if="totalPages > 1"
                v-model="page"
                :length="totalPages"
                :total-visible="5"
                circle
        ></v-pagination>
    </div>
</template>

<script>
    // Import Component Binding Helpers
    import { mapState, mapActions, mapMutations } from 'vuex';
    export default {
        name: "Pagination",
        computed: {
            ...mapState({
                totalPages: state => state.pagination.total_pages,
            }),
            // Not using mapState because for this we need a getter/setter implementation
            page: {
                get () {
                    return this.$store.state.pagination.page
                },
                async set (value) {
                    await this.setPage(value);
                    this.searchMovies();
                }
            }
        },
        methods: {
            ...mapActions({
                searchMovies: 'searchMovies',
            }),
            ...mapMutations({
                setPage: 'setPage'
            })
        }
    }
</script>

<style scoped>
    .pagination-container {
        position: absolute;
        display: flex;
        justify-content: center;
        bottom: 0;
        padding-bottom: 30px;
        width: 100%;
    }
</style>