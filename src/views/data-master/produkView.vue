<script setup>
import Swal from 'sweetalert2';

import { onMounted, nextTick } from "vue";
import DataTable from "datatables.net-dt";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

const datas = [
  { namaProduk: "Sabun", Harga: "12000", Kategori: "PEWANGI"},
  { namaProduk: "Byclin", Harga: "14000", Kategori: "PEMBERSIH"},
];

onMounted(async () => {
  await nextTick();
  new DataTable("#tabelProduk", {
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
  });
});

const showSwal = () => {
  Swal.fire({
    icon: 'success',
    title: 'Berhasil',
    text: 'Data Produk Berhasil Ditambahkan',
    showConfirmButton: false,
    timer: 1500
  })
}

const showSwalDelete = () => {
Swal.fire({
  icon: 'success',
  title: 'Berhasil',
  text: 'Data Produk Berhasil Dihapus',
  showConfirmButton: true,
});
}

</script>

<template>
  <div class="page-title">
    <div class="row mb-4">
      <div class="col-12 col-md-6 order-md-1 order-last">
        <h3>Produk</h3>
      </div>
      <div class="col-12 col-md-6 order-md-2 order-first">
        <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Data Master</a></li>
            <li class="breadcrumb-item active" aria-current="page">Produk</li>
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
                <h4>Data Produk</h4>
              </div>
              <div class="col-6">
                <!-- Trigger Modal -->
                <button type="button" class="btn btn-primary block float-end" data-bs-toggle="modal"
                  data-bs-target="#tambahProduk">
                  <i class="bi bi-plus-lg"></i>
                  Tambah Produk
                </button>

                <!-- Modal -->
                <div class="modal fade" id="tambahProduk" tabindex="-1" role="dialog"
                  aria-labelledby="tambahProdukTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable"
                    role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="tambahProdukTitle">Tambah Produk
                        </h5>
                      </div>
                      <div class="modal-body">
                        <div class="form-group">
                          <label for="namaProduk">Nama Produk</label>
                          <input type="text" name="namaProduk" id="namaProduk" class="form-control">
                        </div>

                        <div class="form-group">
                          <label for="hargaProduk">Harga</label>
                          <input type="text" name="hargaProduk" id="hargaProduk" class="form-control">
                        </div>

                        <div class="form-group">
                          <label for="kategoriProduk">Kategori</label>
                          <select name="kategoriProduk" id="kategoriProduk" class="form-select">
                            <option value="" selected disabled>-- Pilih Kategori --</option>
                            <option value="SAYURAN">SAYURAN</option>
                            <option value="DETERJEN">DETERJEN</option>
                            <option value="PEWANGI">PEWANGI</option>
                            <option value="MINYAK">MINYAK</option>
                            <option value="TELUR">TELUR</option>
                          </select>
                        </div>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-light-secondary" data-bs-dismiss="modal">
                          <i class="bx bx-x d-block d-sm-none"></i>
                          <span class="d-none d-sm-block">Batal</span>
                        </button>
                        <button type="button" class="btn btn-primary ms-1" data-bs-dismiss="modal" @click="showSwal()">
                          <i class="bx bx-check d-block d-sm-none"></i>
                          <span class="d-none d-sm-block">Simpan</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="mb-2 mt-3">
            </div>
          </div>
          <div class="card-body">
            <table id="tabelProduk" class="table table-striped table-bordered w-100">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nama Produk</th>
                  <th>Harga</th>
                  <th>Kategori</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, i) in datas" :key="i">
                  <td>{{ i + 1 }}</td>
                  <td>{{ data.namaProduk }}</td>
                  <td>{{ data.Harga }}</td>
                  <td>{{ data.Kategori }}</td>
                  <td>
                    <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#updateModal">
                      <i class="bi bi-pencil"></i>
                    </button>
                    <button type="button" class="btn btn-danger">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Update Modal -->
    <div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModal"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="updateModal">Tambah Data Penjualan
            </h5>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="namaProduk">Nama Produk</label>
              <input type="text" name="namaProduk" id="namaProduk" class="form-control" value="Stella">
            </div>

            <div class="form-group">
              <label for="hargaProduk">Harga</label>
              <input type="text" name="hargaProduk" id="hargaProduk" class="form-control" value="14000">
            </div>

            <div class="form-group">
              <label for="kategoriProduk">Kategori</label>
              <select name="kategoriProduk" id="kategoriProduk" class="form-select">
                <option value="" disabled>-- Pilih Kategori --</option>
                <option value="SAYURAN">SAYURAN</option>
                <option value="DETERJEN">DETERJEN</option>
                <option value="PEWANGI">PEWANGI</option>
                <option value="MINYAK">MINYAK</option>
                <option value="TELUR">TELUR</option>
              </select>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light-secondary" data-bs-dismiss="modal">
              <i class="bx bx-x d-block d-sm-none"></i>
              <span class="d-none d-sm-block">Batal</span>
            </button>
            <button type="button" class="btn btn-warning text-white ms-1" data-bs-dismiss="modal">
              <i class="bx bx-check d-block d-sm-none"></i>
              <span class="d-none d-sm-block">Update</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
