<template>
   <div class="container mt-5">
    <div class="main-body">
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150">
                    <div class="mt-3">
                      <h4>Пользователь</h4>
                      <p class="text-secondary mb-1">18.01.2001</p>
                      <p class="text-muted font-size-sm">Оренбург</p>
                    </div>
                  </div>
                </div>
              </div>    
            </div>

            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Имя</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Пользователь
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Фамилия</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Пользователь
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Дата рождения</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      18.01.2001
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                      <div class="col-3">
                      <h6 class="mb-0">Город</h6>
                    </div>
                    
                        <select class="form-select col selectItem">
                        <option selected>Оренбург</option>
                        <option value="1">Глазго</option>
                        <option value="2">Таллин</option>
                        <option value="3">Осло</option>
                        <option value="4">Вильнюс</option>
                        <option value="5">Тбилиси</option>
                        <option value="6">Тарту</option>
                        <option value="7">Берлин</option>
                        <option value="8">Стокгольм</option>
                        <option value="9">Уральск</option>
                        <option value="10">Киев</option>
                        </select>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Телефон</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      +79352352590
                    </div>
                  </div>
                </div>
              </div>

              </div>
          </div>

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .selectItem{
        border:none;
    }
</style>