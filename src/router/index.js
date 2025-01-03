import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/Main.vue'
import DashboardView from '@/views/DashboardView.vue'
import prosesAprioriView from '@/views/proses apriori/prosesAprioriView.vue'
import LaporanView from '@/views/laporanView.vue'
import ProdukView from '@/views/data-master/produkView.vue'
import PenjualanView from '@/views/data-master/penjualan/penjualanView.vue'
import DetailPenjualanView from '@/views/data-master/penjualan/detailPenjualanView.vue'
import HasilAprioriView from '@/views/proses apriori/hasilAprioriView.vue'
import LoginView from '@/views/auth/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'public',
      component: MainLayout,
      redirect: '/',
      children: [
        {
          path: '/dashboard',
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
          path: '/hasil-analisa/:id',
          name: 'hasilAnalisa',
          component: HasilAprioriView,
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
        {
          path: '/penjualan/:id',
          name: 'detailPenjualan',
          component: DetailPenjualanView,
          props: true
        }
      ]
    },
  ],
})

export default router