<script lang="ts">
  import { IVA_PCTO } from "$lib/data/constantes";
  import {
    centsToString,
    totalCentsToMontoIVACents,
    totalCentsToSubCeroCents,
    totalCentsToSubIVACents,
    aplicarDescuentoCents,
    calcularIVACents,
  } from "$lib/functions/facturaUtils";
  let precio = 0;
  let descuento = 0;
  let pcto_con_impuesto = 100;
  let incluyeIVA = true;

  $: precioConDescuento = aplicarDescuentoCents(precio * 100, descuento);

  $: total = incluyeIVA
    ? precioConDescuento
    : calcularIVACents(precioConDescuento) + precioConDescuento;
</script>

<div class="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
  <div class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
    <form>
      <h2 class="font-bold text-red-600 text-2xl">Costos del curso</h2>
      <div
        class="mt-4 grid grid-cols-1 bg-gray-200 border-2 border-gray-300 p-5 rounded-xl gap-y-6 sm:grid-cols-2 sm:gap-x-4"
      >
        <div class="sm:col-span-2">
          <label for="precio" class="block text-sm font-medium text-gray-700">
            Precio
          </label>
          <div class="mt-1">
            <input
              bind:value={precio}
              type="number"
              id="precio"
              name="precio"
              class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              min="0"
            />
          </div>
        </div>

        <div class="sm:col-span-2">
          <label
            for="descuento"
            class="block text-sm font-medium text-gray-700"
          >
            Porciento de descuento
          </label>
          <div class="mt-1">
            <input
              bind:value={descuento}
              type="number"
              id="descuento"
              name="descuento"
              class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              min="0"
              max="100"
            />
          </div>
        </div>

        <div class="flex items-center">
          <button
            type="button"
            class:bg-red-600={incluyeIVA}
            class:bg-gray-200={!incluyeIVA}
            class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            role="switch"
            aria-checked={incluyeIVA}
            aria-labelledby="annual-billing-label"
            on:click={() => {
              incluyeIVA = !incluyeIVA;
            }}
          >
            <span
              aria-hidden="true"
              class:translate-x-5={incluyeIVA}
              class:translate-x-0={!incluyeIVA}
              class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            />
          </button>
          <span class="ml-3" id="annual-billing-label">
            <span class="text-sm font-medium text-gray-900">Incluye IVA </span>
          </span>
        </div>

        <div class="sm:col-span-2">
          <label
            for="pcto-con-impuesto"
            class="block text-sm font-medium text-gray-700"
          >
            Porcentaje con impuesto
          </label>
          <div class="mt-1">
            <input
              bind:value={pcto_con_impuesto}
              type="number"
              id="pcto-con-impuesto"
              name="pcto-con-impuesto"
              class="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              min="0"
              max="100"
            />
          </div>
        </div>
      </div>
    </form>
    <div class="mt-10 lg:mt-0">
      <h2 class="font-bold text-red-600 text-2xl">Resumen de la orden</h2>

      <div class="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
        <ul role="list" class="divide-y divide-gray-200">
          <li class="flex py-6 px-4 sm:px-6">
            <div class="flex-shrink-0">
              <div class="aspect-video bg-slate-500 w-20" />
            </div>

            <div class="ml-6 flex-1 flex flex-col">
              <div class="flex">
                <div class="min-w-0 flex-1">
                  <h4 class="text-sm">
                    <span class="font-medium text-gray-700 hover:text-gray-800">
                      Título del curso
                    </span>
                  </h4>
                  <p class="mt-1 text-sm text-gray-500">Nombre del curso</p>
                  <p class="mt-1 text-sm text-gray-500">Nombre del alumno</p>
                </div>
              </div>

              <div class="flex-1 pt-2 flex items-end justify-between">
                <p class="mt-1 text-sm font-medium text-gray-900">
                  ${centsToString(precioConDescuento)} USD {#if !incluyeIVA}<span
                      class="text-gray-600"
                    >
                      (+ IVA)</span
                    >{/if}
                </p>
              </div>
            </div>
          </li>
        </ul>
        <dl class="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
          <div class="flex items-center justify-between">
            <dt class="text-sm">Subtotal {IVA_PCTO}%</dt>
            <dd class="text-sm font-medium text-gray-900">
              ${centsToString(
                totalCentsToSubIVACents(total, pcto_con_impuesto)
              )}
            </dd>
          </div>
          <div class="flex items-center justify-between">
            <dt class="text-sm">Subtotal 0%</dt>
            <dd class="text-sm font-medium text-gray-900">
              ${centsToString(
                totalCentsToSubCeroCents(total, pcto_con_impuesto)
              )}
            </dd>
          </div>
          <div class="flex items-center justify-between">
            <dt class="text-sm">IVA {IVA_PCTO}%</dt>
            <dd class="text-sm font-medium text-gray-900">
              ${centsToString(
                totalCentsToMontoIVACents(total, pcto_con_impuesto)
              )}
            </dd>
          </div>
          <div
            class="flex items-center justify-between border-t border-gray-200 pt-6"
          >
            <dt class="text-base font-medium">Total</dt>
            <dd class="text-base font-medium text-gray-900">
              ${centsToString(total)}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</div>
