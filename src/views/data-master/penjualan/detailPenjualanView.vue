<script setup>
import { RouterLink } from "vue-router";
import { onMounted, nextTick } from "vue";
import DataTable from "datatables.net-dt";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

const datas = [
  { kdProduk: "2ee3q", namaProduk: "Sabun", qty: "1" },
  { kdProduk: "bb4sq", namaProduk: "Byclin", qty: "2" },
  { kdProduk: "bb4sq", namaProduk: "Buku Atlas", qty: "1" },
  { kdProduk: "bb4sq", namaProduk: "Masako Rasa Ayam", qty: "1" },
];

onMounted(async () => {
  await nextTick();
  new DataTable("#dataTable", {
    paging: true,
    scrollX: true,
    searching: true,
    ordering: true,
    info: true,
    language: {
      paginate: {
        previous: "<",
        next: ">",
      },
      search: "Cari:",
      lengthMenu: "Tampilkan _MENU_ entri",
      info: "Menampilkan _START_ hingga _END_ dari _TOTAL_ entri",
    },
    columnDefs: [
      { width: "5%", targets: 0, },
      { className: "text-start", targets: [0, 1, 2, 3] }
    ],
  });
});
</script>

<template>
  <div class="page-title">
    <div class="row mb-4">
      <div class="col-12 col-md-6 order-md-1 order-last">
        <h3>Detail Penjualan</h3>
      </div>
      <div class="col-12 col-md-6 order-md-2 order-first">
        <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Data Master</a></li>
            <RouterLink :to="{ name: 'penjualan' }" class="breadcrumb-item">Penjualan</RouterLink>
            <li class="breadcrumb-item active" aria-current="page">Detail Penjualan</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="page-content">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-6">
                <h4>Detail Penjualan</h4>
                <h6 class="text-muted text-sm font-semibold">Nomor Faktur: {{ $route.params.id }}</h6>
              </div>
              <hr class="mb-2 mt-3" />
            </div>
          </div>
          <div class="card-body">
            <table id="dataTable" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Kd Produk</th>
                  <th>Nama Produk</th>
                  <th>Qt</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, i) in datas" :key="i">
                  <td>{{ i + 1 }}</td>
                  <td>{{ data.kdProduk }}</td>
                  <td>{{ data.namaProduk }}</td>
                  <td>{{ data.qty }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#dataTable thead th {
  font-size: 14px;
}

#dataTable tbody td {
  font-size: 14px;
}
</style>