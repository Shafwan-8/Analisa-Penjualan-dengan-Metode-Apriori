<script setup>
  import { onMounted, nextTick } from "vue";
  import DataTable from "datatables.net-dt";
onMounted(async () => {
  await nextTick();
  new DataTable("#dataTable", {
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
      { className: "text-start", targets: "_all" },
    ],
  });
})
</script>

<template>
  <div class="page-heading">
    <h3>Laporan Apriori</h3>
  </div>
  <div class="page-content">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header pb-3">
            <div class="row border-bottom pb-2">
              <div class="col-md-6">
                <h4>Laporan Analisa</h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <table id="dataTable" class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Kd. Pengujian</th>
                  <th>Nama Penguji</th>
                  <th>Waktu Pengujian</th>
                  <th>Support</th>
                  <th>Confidence</th>
                  <th>Total Pola Produk</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>sk3kl</td>
                  <td>Wawan Kurniawan</td>
                  <td>2024-11-16 05:45:23</td>
                  <td>1</td>
                  <td>1</td>
                  <td>43</td>
                  <td>
                    <button type="button" class="btn btn-primary btn-sm m-1">
                      Detail
                    </button>
                    <button type="button" class="btn btn-success btn-sm m-1">
                      Cetak
                    </button>
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

<style scoped>
#dataTable tbody td {
  font-size: 14px;
}
</style>