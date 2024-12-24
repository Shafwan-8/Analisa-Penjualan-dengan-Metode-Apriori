<script setup>
import Swal from 'sweetalert2';

import { onMounted, nextTick } from "vue";
import DataTable from "datatables.net-dt";
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";

const datas = [
  { namaProduk: "Sabun", Harga: "12000", Kategori: "PEWANGI"},
  { namaProduk: "Byclin", Harga: "15000", Kategori: "PEMBERSIH"},
  { namaProduk: "Buku Atlas", Harga: "20000", Kategori: "PENDIDIKAN"},
  { namaProduk: "Masako Rasa Ayam", Harga: "10000", Kategori: "BUMBU"},
];

onMounted(async () => {
  await nextTick();
  new DataTable("#tabelProduk", {
    paging: true,
    searching: true,
    scrollX: true,
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
    ]
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
  title: 'Apakah Anda Yakin?',
  text: "Data produk akan dihapus dan tidak dapat dikembalikan!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Ya, Hapus!'
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      icon: 'success',
      title: 'Berhasil',
      text: 'Data Produk Berhasil Dihapus',
      showConfirmButton: false,
      timer: 1500
    });
  }
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
                          <input type="number" name="hargaProduk" id="hargaProduk" class="form-control">
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
                            <option value="PENDIDIKAN">PENDIDIKAN</option>
                            <option value="BUMBU">BUMBU</option>
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
                  <td>Rp. {{ data.Harga }}</td>
                  <td>{{ data.Kategori }}</td>
                  <td>
                    <button type="button" class="btn btn-primary btn-sm m-2" data-bs-toggle="modal" data-bs-target="#updateModal">
                      <i class="bi bi-pencil me-2"></i>Edit
                    </button>
                    <button type="button" class="btn btn-danger btn-sm m-2" @click="showSwalDelete()">
                      <i class="bi bi-trash me-2"></i>Hapus
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
            <h5 class="modal-title" id="updateModal">Edit Data Produk
            </h5>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="namaProduk">Nama Produk</label>
              <input type="text" name="namaProduk" id="namaProduk" class="form-control" value="Sabun">
            </div>

            <div class="form-group">
              <label for="hargaProduk">Harga</label>
              <input type="number" name="hargaProduk" id="hargaProduk" class="form-control" value="12000">
            </div>

            <div class="form-group">
              <label for="kategoriProduk">Kategori</label>
              <select name="kategoriProduk" id="kategoriProduk" class="form-select">
                <option value="" disabled>-- Pilih Kategori --</option>
                <option value="SAYURAN">SAYURAN</option>
                <option value="DETERJEN">DETERJEN</option>
                <option value="PEWANGI" selected >PEWANGI</option>
                <option value="MINYAK">MINYAK</option>
                <option value="TELUR">TELUR</option>
                <option value="BUMBU">BUMBU</option>
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
