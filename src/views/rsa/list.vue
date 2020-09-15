<template>
    <div class="app-container">
        <div class="table-title">
            <span class="title-1">DevOps</span>
            <span class="title-2">密钥列表</span>
        </div>
        <div class="filter-container">
            <el-button class="filter-item" size="medium" type="success" icon="el-icon-edit" @click="handleCreate">
                新增
            </el-button>
        </div>
        <div>
            <el-table
                v-loading="listLoading"
                :data="rsaList"
                border
                fit 
                highlight-current-row
                style="width: 100%;"
            >
            <el-table-column label="序号" type="index" width="100" />
            <el-table-column label="用户名" min-width="100px">
                <template slot-scope="{row}">
                <span>{{ row.user }}</span>
                </template>
            </el-table-column>
            <el-table-column label="密钥名称" min-width="180px">
                <template slot-scope="{row}">
                <span>{{ row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column label="状态" min-width="180px">
                <template slot-scope="{row}">
                    <el-tag :type="row.switch.code | statusFilter">
                        {{ row.switch.text }}
                    </el-tag>
                </template>
            </el-table-column>

            </el-table>
        </div>
    </div>
</template>
<script>
import { getRsas } from '@/api/rsa'
export default {
    filters: {
        statusFilter(status) {
        const statusMap = {
            1: 'success',
            2: 'danger',
        }
        return statusMap[status]
        },
    },
    data() {
        return {
            listLoading: false,
            rsaList: []
        }
    },
    created() {
        this.getRsaList()
    },
    methods: {
        async getRsaList() {
            this.rsaList = await getRsas()
        }

    }
}
</script>
<style scoped>


</style>