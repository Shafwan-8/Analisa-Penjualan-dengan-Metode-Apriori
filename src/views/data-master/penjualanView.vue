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
            <li class="breadcrumb-item active" aria-current="page">Penjualan</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  <div class="page-content">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-6">
                <h4>Data Penualan</h4>
              </div>
              <div class="col-6">
                <!-- Trigger Modal -->
                <button type="button" class="btn btn-primary block float-end" data-bs-toggle="modal"
                  data-bs-target="#tambahPenjualan">
                  <i class="bi bi-plus-lg"></i>
                  Tambah Data Penjualan
                </button>

                <!-- Modal -->
                <div class="modal fade" id="tambahPenjualan" tabindex="-1" role="dialog"
                  aria-labelledby="tambahPenjualan" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable"
                    role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="tambahPenjualan">Tambah Data Penjualan
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
                            <option value="PEMBERSIH">PEMBERSIH</option>
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
                        <button type="button" class="btn btn-primary ms-1" data-bs-dismiss="modal">
                          <i class="bx bx-check d-block d-sm-none"></i>
                          <span class="d-none d-sm-block">Simpan</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">data table</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
