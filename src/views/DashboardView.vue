<script setup>
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);

const data = [
  [1, "eewq", "12:00", 4, 3],
  [1, "eewq", "12:00", 4, 3],
  [1, "eewq", "12:00", 4, 3],
  [1, "eewq", "12:00", 4, 3],
  [1, "eewq", "12:00", 4, 3],
  [1, "eewq", "12:00", 4, 3],
  [1, "eewq", "12:00", 4, 3],
  [1, "eewq", "12:00", 4, 3],
  [1, "eewq", "12:00", 4, 3],
  [1, "eewq", "12:00", 4, 3],
  [1, "eewq", "12:00", 4, 3],
];
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
                    <h6 class="font-extrabold mb-0">112.000</h6>
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
                    <h6 class="font-extrabold mb-0">183.000</h6>
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
                    <h6 class="font-extrabold mb-0">80.000</h6>
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
                    <h6 class="font-extrabold mb-0">112</h6>
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
                <hr class="mt-3">
              </div>
              <div class="card-body">
                <DataTable :data="data" class="display table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>ID Transaksi</th>
                      <th>Waktu Transaksi</th>
                      <th>Total Produk</th>
                      <th>Nominal Transaksi</th>
                    </tr>
                  </thead>
                </DataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
