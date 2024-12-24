<script setup>
import Swal from 'sweetalert2';

const showConfirmSwal = () => {
  Swal.fire({
    title: 'Apakah Anda Yakin?',
    text: "Data akan diproses dengan metode apriori",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya, Proses!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Proses Selesai!',
        'Data berhasil diproses dengan metode apriori',
        'success'
      )
    }
  })
}
</script>

<template>
  <div class="page-heading">
    <h3>Proses Apriori</h3>
  </div>
  <div class="page-content">
    <div class="row">
      <div class="col-12"></div>
      <div class="card">
        <div class="card-header pb-3">
          <div class="row border-bottom pb-2">
            <div class="col-md-6">
              <h4>Proses Apriori</h4>
              <h6 class="text-muted text-sm font-semibold">Setup nilai support & confidence</h6>
            </div>
          </div>
        </div>
        <div class="card-body">
          <form action="#" method="get">
            <div class="row">
              <div class="col-12">
                <div class="mb-3">
                  <label class="form-label" for="namaPenguji">Nama Penguji</label>
                  <input type="text" class="form-control" value="Wawan Kurniawan" id="namaPenguji">
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Min. Support</label>
                  <select class="form-select">
                    <option value="1">1</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-3">
                  <label class="form-label">Min. Confidence</label>
                  <select class="form-select">
                    <option value="1">1</option>
                  </select>
                </div>
              </div>
            </div>
            <button class="btn btn-primary btn-md" @click.prevent="showConfirmSwal()">Mulai Analisa Penjualan</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
