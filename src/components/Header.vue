<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container-fluid">
      <a class="navbar-brand pointer" @click="$router.push({ name: 'UserList' })">Home</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active pointer" aria-current="page" @click="$router.push({ name: 'UserList' })">User
              List</a>
          </li>
          <li class="nav-item">
            <a class="nav-link pointer" @click="$router.push({ name: 'FormInput' })">Form Validation</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>