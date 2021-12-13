<div class="mt-10 lg:mt-0">
  <h2 class="font-bold text-red-600 text-2xl">Resumen de la orden</h2>

  <div class="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
    <ul role="list" class="divide-y divide-gray-200">
      <li class="flex py-6 px-4 sm:px-6">
        <div class="flex-shrink-0">
          <!-- <img
            src={variables.backendURL + curso.thumbnail.url}
            alt={curso.thumbnail.alternativeText || curso.tituloCorto}
            class="w-20 rounded-md"
          /> -->
        </div>

        <div class="ml-6 flex-1 flex flex-col">
          <div class="flex">
            <div class="min-w-0 flex-1">
              <h4 class="text-sm">
                <span class="font-medium text-gray-700 hover:text-gray-800">
                  <!-- {curso.titulo} -->
                </span>
              </h4>
              <p class="mt-1 text-sm text-gray-500">
                <!-- {curso.area.nombre} -->
              </p>
              <p class="mt-1 text-sm text-gray-500">
                <!-- {`${$session?.user.nombres} ${$session?.user.apellidos}`} -->
              </p>
            </div>
          </div>

          <div class="flex-1 pt-2 flex items-end justify-between">
            <p class="mt-1 text-sm font-medium text-gray-900">
              <!-- ${centsToString(precioConDescuento)} USD -->
            </p>
          </div>
        </div>
      </li>
    </ul>
    <dl class="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
      <div class="flex items-center justify-between">
        <!-- <dt class="text-sm">Subtotal {IVA_PCTO}%</dt> -->
        <dd class="text-sm font-medium text-gray-900">
          <!-- ${centsToString(
            totalCentsToSubIVACents(
              precioConDescuento,
              curso.pcto_con_impuesto ?? 100
            )
          )} -->
        </dd>
      </div>
      <div class="flex items-center justify-between">
        <dt class="text-sm">Subtotal 0%</dt>
        <dd class="text-sm font-medium text-gray-900">
          <!-- ${centsToString(
            totalCentsToSubCeroCents(
              precioConDescuento,
              curso.pcto_con_impuesto ?? 100
            )
          )} -->
        </dd>
      </div>
      <div class="flex items-center justify-between">
        <!-- <dt class="text-sm">IVA {IVA_PCTO}%</dt> -->
        <dd class="text-sm font-medium text-gray-900">
          <!-- ${centsToString(
            totalCentsToMontoIVACents(
              precioConDescuento,
              curso.pcto_con_impuesto ?? 100
            )
          )} -->
        </dd>
      </div>
      <div
        class="flex items-center justify-between border-t border-gray-200 pt-6"
      >
        <dt class="text-base font-medium">Total</dt>
        <dd class="text-base font-medium text-gray-900">
          <!-- ${centsToString(precioConDescuento)} -->
        </dd>
      </div>
    </dl>

    <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
      <!-- <button
        on:click={onSubmitHandler}
        class="w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
      >
        Proceder a pagar
      </button> -->
    </div>
  </div>
  <a
    href="/"
    class="block mt-6 text-right text-sm font-semibold hover:underline tracking-wide text-red-600"
    >Regresar al Inicio</a
  >
</div>
