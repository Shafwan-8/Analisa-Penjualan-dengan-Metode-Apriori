<script setup>
import { onMounted, nextTick } from "vue";
import DataTable from "datatables.net-dt";
import {RouterLink} from "vue-router";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

const datas = [
  {
    noFaktur: "123456789",
    totalProduk: "4",
    totalQty: "5",
    totalHarga: "57000",
  },
  {
    noFaktur: "987654321",
    totalProduk: "7",
    totalQty: "22",
    totalHarga: "30000",
  },
];

onMounted(async () => {
  await nextTick();
  new DataTable("#tabelProduk", {
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
      { width: "60px", targets: 0, },
      { width: "400px", targets: 1, },
      { className: "text-start", targets: [0, 1, 2, 3, 4] }
    ],
  });
});
</script>

<template>
  <div class="page-title">
    <div class="row mb-4">
      <div class="col-12 col-md-6 order-md-1 order-last">
        <h3>Penjualan</h3>
      </div>
      <div class="col-12 col-md-6 order-md-2 order-first">
        <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Data Master</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Penjualan
            </li>
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
                <h4>Data Penjualan</h4>
              </div>
              <div class="col-6">
                <!-- Trigger Modal -->
                <button type="button" class="btn btn-primary block float-end" data-bs-toggle="modal"
                  data-bs-target="#tambahPenjualan">
                  <i class="bi bi-plus-lg"></i>
                  Tambah Data Penjualan
                </button>

                <!-- Modal -->
                <div class="modal fade" id="tambahPenjualan" tabindex="-1" role="dialog" aria-labelledby="tambahPenjualan" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable"
                    role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="tambahPenjualan">
                          Tambah Data Penjualan
                        </h5>
                      </div>
                      <div class="modal-body">

                        <div class="form-group">
                          <label for="totalProduk">Total Produk</label>
                          <input type="number" name="totalProduk" id="totalProduk" class="form-control" />
                        </div>

                        <div class="form-group">
                          <label for="totalQty">Total Qty.</label>
                          <input type="number" name="totalQty" id="totalQty" class="form-control" />
                        </div>

                        <div class="form-group">
                          <label for="totalHarga">Total Harga</label>
                          <input type="number" name="totalHarga" id="totalHarga" class="form-control" />
                        </div>

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-light-secondary" data-bs-dismiss="modal">
                          <i class="bx bx-x d-block d-sm-none"></i>
                          <span class="d-none d-sm-block">Batal</span>
                        </button>
                        <button type="button" class="btn btn-primary ms-1" data-bs-dismiss="modal">
                          <i class="bx bx-check d-block d-sm-none"></i>
                          <span class="d-none d-sm-block">Simpan</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="mb-2 mt-3" />
            </div>
          </div>
          <div class="card-body">
            <table id="tabelProduk" class="table table-striped table-bordered w-100">
              <thead>
                <tr>
                  <th>#</th>
                  <th>No. Faktur</th>
                  <th>Total Produk</th>
                  <th>Total Qt</th>
                  <th>Total Harga</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, i) in datas" :key="i">
                  <td>{{ i + 1 }}</td>
                  <td>{{ data.noFaktur }}</td>
                  <td>{{ data.totalProduk }}</td>
                  <td>{{ data.totalQty }}</td>
                  <td>Rp. {{ data.totalHarga }}</td>
                  <td>
                    <RouterLink :to="{name: 'detailPenjualan', params: {id: data.noFaktur}}" class="btn btn-primary btn-sm me-2">
                      <i class="bi bi-folder me-2"></i>Detail
                    </RouterLink>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
