<script setup>
import { onMounted, nextTick } from "vue";
import DataTable from "datatables.net-dt";

onMounted(async () => {
  await nextTick();
  new DataTable("table.display", {
    responsive: false,
    autoWidth: false,
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
      { width: "5%", targets: 0 },
      { className: "text-start", targets: "_all" }
    ]
  });
})
</script>

<template>
  <div class="page-heading">
    <h3>Hasil Analisa</h3>
  </div>
  <div class="page-content">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-3">
            <div class="row border-bottom pb-2">
              <div class="col-md-6">
                <h5>Hasil Analisa Apriori</h5>
              </div>
            </div>
          </div>
          <div class="card-body">

            <div class="category border-bottom mb-4">
              <div class="title">
                <h5 class="text-semibold">Data Support Produk</h5>
              </div>
              <div class="table">
                <table id="DataSupportProduk" class="display table table-striped table-bordered">
                  <thead>
                    <th>#</th>
                    <th>Kd. Produk</th>
                    <th>Nama Produk</th>
                    <th>Total Transaksi</th>
                    <th>Perhitungan Support</th>
                    <th>Support</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>divhs</td>
                      <td>Stella</td>
                      <td>8</td>
                      <td>(8 / 97) * 100</td>
                      <td>8.25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="category border-bottom mb-4">
              <div class="title">
                <h5 class="text-semibold">Item yang memenuhi syarat minimun support 100 %</h5>
              </div>
              <div class="table">
                <table id="minSupport" class="display table table-striped table-bordered">
                  <thead>
                    <th>#</th>
                    <th>Kd. Produk</th>
                    <th>Nama Produk</th>
                    <th>Support</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>divhs</td>
                      <td>Stella</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="category border-bottom mb-4">
              <div class="title">
                <h5 class="text-semibold">Kombinasi 2 itemset</h5>
              </div>
              <div class="table">
                <table id="kombinasiItemset" class="display table table-striped table-bordered">
                  <thead>
                    <th>#</th>
                    <th>Kd. Kombinasi</th>
                    <th>Produk A</th>
                    <th>Produk B</th>
                    <th>Jumlah Transaksi</th>
                    <th>Perhitungan Support</th>
                    <th>Support</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>divhs</td>
                      <td>Stella</td>
                      <td>8</td>
                      <td>8</td>
                      <td>8</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="category border-bottom mb-4">
              <div class="title">
                <h5 class="text-semibold">Kombinasi yang memenuhi minimum confidence > 100%</h5>
              </div>
              <div class="table">
                <table id="kombinasiItemsetMinimum" class="display table table-striped table-bordered">
                  <thead>
                    <th>#</th>
                    <th>Kd. Kombinasi</th>
                    <th>Produk A</th>
                    <th>Produk B</th>
                    <th>Jumlah Transaksi</th>
                    <th>Perhitungan Support</th>
                    <th>Support</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>divhs</td>
                      <td>Stella</td>
                      <td>8</td>
                      <td>8</td>
                      <td>8</td>
                      <td>8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="category mb-0">
              <div class="title">
                <h5 class="text-semibold">Pola hasil analisa</h5>
              </div>
              <div class="table">
                <table id="polaHasilAnalisa" class="display table table-striped table-bordered">
                  <thead>
                    <th>#</th>
                    <th>Pola</th>
                    <th>Confidence</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>divhs</td>
                      <td>Stella</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <button type="button" class="btn btn-primary">Cetak Hasil Analisa</button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
