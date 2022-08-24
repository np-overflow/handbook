<script setup lang="ts">
import { useData } from 'vitepress'

const { frontmatter: fm } = useData()

const statusClasses = {
  Pending: 'chip-orange',
  Approved: 'chip-green',
  Unapproved: 'chip-red',
}
</script>

<template>
  <table>
    <tr>
      <th>Status</th>
      <td>
        <div class="flex">
          <div :class="statusClasses[fm.status]">{{ fm.status }}</div>
        </div>
      </td>
    </tr>
    <tr>
      <th>Driver</th>
      <td>
        {{ fm.driver }}
      </td>
    </tr>
    <tr v-if="fm.approver">
      <th>
        Approver
      </th>
      <td>
        {{ fm.approver }}
      </td>
    </tr>
    <tr v-if="fm.contributors">
      <th>
        Contributors
      </th>
      <td>
        <div class="flex gap-2">
          <div class="chip-gray" v-for="contributor in fm.contributors">
            {{ contributor }}
          </div>
        </div>
      </td>
    </tr>
  </table>
</template>
