<template>
    <div>
        <div class="top-bg"></div>
        <div class="content">
            <img src="" alt="Logo">

            <div class="card card-login">
                <div class="card-header mb-3 mt-3">
                    <h4 class="text-center">Login ke dalam Aplikasi</h4>
                </div>
                <div class="card-body">
                    <form action="#">
                        <div class="form-group mb-3">
                            <label for="username" class="form-label text-muted">Username</label>
                            <input type="text" name="username" id="username" class="form-control" required>
                        </div>
                        <div class="form-group mb-3">
                            <label for="password" class="form-label text-muted">Password</label>
                            <input type="text" name="password" id="password" class="form-control" required>
                        </div>
                        <a href="/dashboard" class="btn btn-primary w-100">login</a>
                        <!-- <RouterLink :to="{name: 'dashboard'}" class="btn btn-primary w-100">Login</RouterLink> -->
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.top-bg {
    width: 100%;
    height: 100vh;
    /* background-color: #445ebf; */
    background: rgb(68, 94, 191);
    background: linear-gradient(180deg, rgba(68, 94, 191, 1) 0%, rgba(253, 221, 45, 0) 100%);
}

.content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

img {
    display: block;
    margin: 0 auto 2rem;
    width: 200px;
    /* Adjust the width as desired */
    height: auto;
}

.card-login {
    width: 30vw;
}

@media screen and (max-width: 768px) {
    .card-login {
        width: 80vw;
    }
}
</style>