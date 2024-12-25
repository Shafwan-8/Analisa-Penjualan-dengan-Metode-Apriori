<script setup>
import { onMounted, nextTick } from "vue";
import DataTable from "datatables.net-dt";

const datas = [
  { idTransaksi: "eewq", waktuTransaksi: "12-10-2024 12:10:22", totalProduk: 4, nominalTransaksi: 3 },
  { idTransaksi: "abcd", waktuTransaksi: "23-8-2024 14:20:08", totalProduk: 6, nominalTransaksi: 5 },
  { idTransaksi: "xyzw", waktuTransaksi: "17-9-2024 15:43:11", totalProduk: 2, nominalTransaksi: 1 },
];

onMounted(async () => {
  await nextTick();
  new DataTable("#tableTransaksi", {
    responsive: true,
    paging: true,
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
      { className: "text-start", targets: [0, 1, 2, 3, 4] }
    ]
  });
});
</script>

<template>
  <div class="page-heading">
    <h3>Dashboard</h3>
  </div>
  <div class="page-content">
    <section class="row">
      <div class="col-12 col-lg-12">
        <div class="row">
          <div class="col-6 col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body px-4 py-4-5">
                <div class="row">
                  <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                    <div class="stats-icon purple mb-2">
                      <i class="iconly-boldDocument"></i>
                    </div>
                  </div>
                  <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                    <h6 class="text-muted font-semibold">Total Transaksi</h6>
                    <h6 class="font-extrabold mb-0">3</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body px-4 py-4-5">
                <div class="row">
                  <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                    <div class="stats-icon blue mb-2">
                      <i class="iconly-boldBag-2"></i>
                    </div>
                  </div>
                  <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                    <h6 class="text-muted font-semibold">Total Produk</h6>
                    <h6 class="font-extrabold mb-0">4</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body px-4 py-4-5">
                <div class="row">
                  <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                    <div class="stats-icon green mb-2">
                      <i class="iconly-boldDiscount"></i>
                    </div>
                  </div>
                  <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                    <h6 class="text-muted font-semibold">Avg. Harga Produk</h6>
                    <h6 class="font-extrabold mb-0">Rp. 12.000,-</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3 col-md-6">
            <div class="card">
              <div class="card-body px-4 py-4-5">
                <div class="row">
                  <div class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start">
                    <div class="stats-icon red mb-2">
                      <i class="iconly-boldUser1"></i>
                    </div>
                  </div>
                  <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                    <h6 class="text-muted font-semibold">Total User</h6>
                    <h6 class="font-extrabold mb-0">1</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header pb-0">
                <h4>Transaksi Terakhir</h4>
                <hr class="mt-3" />
              </div>
              <div class="card-body">
                <table id="tableTransaksi" class="table table-striped table-bordered w-100">
                  <thead class="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>ID Transaksi</th>
                      <th>Waktu Transaksi</th>
                      <th>Total Produk</th>
                      <th>Nominal Transaksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data, i) in datas" :key="i">
                      <td>{{ i + 1 }}</td>
                      <td>{{ data.idTransaksi }}</td>
                      <td>{{ data.waktuTransaksi }}</td>
                      <td>{{ data.totalProduk }}</td>
                      <td>{{ data.nominalTransaksi }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
