let electronicos = [
    { nombre: 'iPad Pro 12"', precioEnUsd: 2200, cantVendidos: 15 },
    { nombre: "Macbook Air", precioEnUsd: 1500, cantVendidos: 20 },
    { nombre: "Macbook Pro", precioEnUsd: 3000, cantVendidos: 7 },
    { nombre: "iPhone X", precioEnUsd: 650, cantVendidos: 150 },
    { nombre: "iPhone 12", precioEnUsd: 1200, cantVendidos: 100 },
];
/*
const tiendaElectronica = {
    productos: electronicos,
    gananciaTotal: function(){
        const gananciaPorProducto = this.productos.map((producto) => producto.precioEnUsd * producto.cantVendidos);
        const gananciaTotal = gananciaPorProducto.reduce((acum, producto) => acum + producto);
        return gananciaTotal;
    },
    filtrarPorVendidos: function(cantidadMinima){
        const filtrados = this.productos.filter((producto) => producto.cantVendidos >= cantidadMinima);
        return filtrados;
    },
    aumentarPrecio: function(porcentajeAumento) {
        //const incrementoPrecio = this.productos.forEach((producto) => porcentajeAumento * producto.precioEnUsd/ 100);
        //const incrementoPrecio = porcentajeAumento * this.productos.precioEnUsd / 100;
        const aumentado = this.productos.map((producto) => {
            const incrementoPrecio = porcentajeAumento * producto.precioEnUsd / 100;
            producto.precioEnUsd += incrementoPrecio;
            return producto;
            
        })
        return aumentado;
    }
}

console.log("------------------------");
console.log("-----gananciaTotal------");
console.log("------------------------");
const ganancia = tiendaElectronica.gananciaTotal();
console.log("La ganancia que obtuvo la tienda de electrónica es: $" + ganancia);

console.log("-----------------------------");
console.log("-----filtrarPorVendidos------");
console.log("-----------------------------");
const filtroPorCantidad = tiendaElectronica.filtrarPorVendidos(50);
console.table(filtroPorCantidad);

console.log("-----------------------------");
console.log("---------aumentarPrecio------");
console.log("-----------------------------");
const precioAumentado = tiendaElectronica.aumentarPrecio(10);
console.log(precioAumentado);
*/

/* Resolución por Martín profe*/
const tienda = {
    productos: electronicos,
    gananciaTotal: function () {
        return this.productos.reduce(
            (total, producto) => total + producto.precioEnUsd * producto.cantVendidos, 0)

    },
    /* Resolución del 3*/
    aumentarPrecio: function (porcentajeAumento) {
        return this.productos.forEach((producto) => {

            producto.precioEnUsd += (porcentajeAumento * producto.precioEnUsd) / 100;

        })
    },
}
console.log(tienda.gananciaTotal());
//let aumentados = tienda.aumentarPrecio(10);
//console.log(aumentados);
console.log(tienda.productos);

