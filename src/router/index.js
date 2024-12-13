import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/Main.vue'
import DashboardView from '@/views/DashboardView.vue'
import prosesAprioriView from '@/views/prosesAprioriView.vue'
import LaporanView from '@/views/laporanView.vue'
import ProdukView from '@/views/data-master/produkView.vue'
import PenjualanView from '@/views/data-master/penjualanView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: MainLayout,
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: DashboardView,
        },
        {
          path: '/proses-apriori',
          name: 'proses-apriori',
          component: prosesAprioriView,
        },
        {
          path: '/laporan',
          name: 'laporan',
          component: LaporanView,
        },
        {
          path: '/produk',
          name: 'produk',
          component: ProdukView,
        },
        {
          path: '/penjualan',
          name: 'penjualan',
          component: PenjualanView,
        },
      ]
    },
  ],
})

export default router