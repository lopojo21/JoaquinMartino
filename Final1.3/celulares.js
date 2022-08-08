

// let Productos = [];
// let total = 0;


// function add(product,precio) {
//     console.log(product,precio)
//     Productos.push(product);
//     total= total + precio ;
//     document.getElementById("pago").innerHTML = `Pagar $${total}` 
// }

// function pagar(){
//    alert(`${Productos}, $${total}`);
//     // console.log(product,price);

// }

// La facil ↑↑☻♦↑↑↑↑↑↑↑↑↑


// La me la complico solo ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

class celular {
    constructor(marca, modelo, precio, id) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.id = id;
    }
}

const sA13 = new celular("Samsung", "A13", 41999, "sA53");
const sA23 = new celular("Samsung", "A23", 58999, "sA23");
const sA03 = new celular("Samsung", "A03", 30499, "sA03");
const mG22 = new celular("Motorola", "G22", 40499, "mG22");
const mG51 = new celular("Motorola", "G51", 60587, "mG51");
const mG31 = new celular("Motorola", "G31", 38099, "mG31");

class formData{
    constructor(nombre, apellido, direccion, email, telefono,productos){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.email = email;
        this.telefono = telefono;
        // this.productos = productos.id;
    }
}
let productos = [];
let total = 0;
let i = 0;


// function add(id,precio) {
//     console.log(id.id,precio)
//     Productos.push(id);
//     console.log(Productos)
//     total= total + precio ;
//     document.getElementById("pago").innerHTML = `Pagar $${total}` 
// }

// function pagar(){
//     alert(`Gracias por su compra`);
//     for(let i=0 ; i<=Productos.length; i++){
//         if(Productos<1){
//              alert(`Lamentamos que no te llevaras nada ♥. te esperamos la proxima`)
//         } else {
//             alert(`Usted Lleva:${Productos[i].modelo}, con un costo de $${Productos[i].precio}`);//hecho molesto a proposito, para usar cosas, directamente pondria solo el precio. ♥
//             Productos=[] ;
//             document.getElementById("pago").innerHTML = `Pagar`
//         }
//     }
// }

// bueno volvemos con otra entrega. con todo! 24/7


//Especificaciones.
const fA03 = document.getElementById("img1");
const fA13 = document.getElementById("img2");
const fA23 = document.getElementById("img3");
const fG22 = document.getElementById("img4");
const fG31 = document.getElementById("img5");
const fG51 = document.getElementById("img6");

fA03.onmouseover = () => {
    fA03.setAttribute("src", "img/fA03.png")

}
fA03.onmouseout = () => {
    fA03.setAttribute("src", "img/sA03.PNG")
}

fA13.onmouseover = () => {
    fA13.setAttribute("src", "img/fA13.png")

}
fA13.onmouseout = () => {
    fA13.setAttribute("src", "img/sA13.PNG")
}

fA23.onmouseover = () => {
    fA23.setAttribute("src", "img/fA23.png")

}
fA23.onmouseout = () => {
    fA23.setAttribute("src", "img/sA23.PNG")
}


fG22.onmouseover = () => {
    fG22.setAttribute("src", "img/fG22.png")

}
fG22.onmouseout = () => {
    fG22.setAttribute("src", "img/MG22.PNG")
}

fG31.onmouseover = () => {
    fG31.setAttribute("src", "img/fG31.png")

}
fG31.onmouseout = () => {
    fG31.setAttribute("src", "img/MG31.PNG")
}
fG51.onmouseover = () => {
    fG51.setAttribute("src", "img/fG51.png")

}
fG51.onmouseout = () => {
    fG51.setAttribute("src", "img/MG51.PNG")
}

// Agregar

const ba03 = document.getElementById("ba03");
const ba13 = document.getElementById("ba13");
const ba23 = document.getElementById("ba23");
const bg22 = document.getElementById("bg22");
const bg31 = document.getElementById("bg31");
const bg51 = document.getElementById("bg51");



ba03.onclick = (event) => {
    productos.push(sA03);
    total = total + sA03.precio;
    Toastify({
        text: "Se agrego A03",
        className: "info",
        position: "left",
        style: {
          background: "linear-gradient(to right, #ab1fa0, #ff61f3)",
        }
      }).showToast();
    // console.log(event.target.childer);
    // console.log(pago);
}
ba13.onclick = (event) => {
    productos.push(sA13);
    total = total + sA13.precio;
    Toastify({
        text: "Se agrego A13",
        className: "info",
        position: "left",
        style: {
          background: "linear-gradient(to right, #ab1fa0, #ff61f3)",
        }
      }).showToast();
}
ba23.onclick = (event) => {
    productos.push(sA23);
    total = total + sA23.precio;
    Toastify({
        text: "Se agrego A23",
        className: "info",
        position: "left",
        style: {
          background: "linear-gradient(to right, #ab1fa0, #ff61f3)",
        }
      }).showToast();
}
bg22.onclick = (event) => {
    productos.push(mG22);
    total = total + mG22.precio;
    Toastify({
        text: "Se agrego G22",
        className: "info",
        position: "left",
        style: {
          background: "linear-gradient(to right, #ab1fa0, #ff61f3)",
        }
      }).showToast();
}
bg31.onclick = (event) => {
    productos.push(mG31);
    total = total + mG31.precio;
    Toastify({
        text: "Se agrego G31",
        className: "info",
        position: "left",
        style: {
          background: "linear-gradient(to right, #ab1fa0, #ff61f3)",
        }
      }).showToast();
}
bg51.onclick = (event) => {
    productos.push(mG51);
    total = total + mG51.precio;
    Toastify({
        text: "Se agrego G51",
        className: "info",
        position: "left",
        style: {
          background: "linear-gradient(to right, #ab1fa0, #ff61f3)",
        }
      }).showToast();
}

//Pagar

const sumatoria = document.getElementById("contenido");
const formu = document.getElementById("formu");
const pago = document.getElementById("pago")
sumatoria.onclick = (event) => {
    document.getElementById("pago").innerHTML = `Pagar:$${total}`;
}
pago.onclick =() => {
    formu.classList.add("contenedorF_show");
   
}


// Cancelar
const cancelar = document.getElementById("cancelar")

cancelar.onclick = (event) => {
    total = 0;
    let product = [];
    document.getElementById("pago").innerHTML = `Pagar:$${total}`;
    formu.classList.remove("contenedorF_show");
    Swal.fire({
        icon: 'error',
        title: 'COMPRA CANCELADA...',
        text: 'Volvemos a llenar el carrito?!',
        
      })
}


// proximamente agregar 2 tarjetas una con una calculadora para la forma y medio de pago

// otra tarjeta que guardara informacion sobre los datos de envio.

const formularioEnvio = document.querySelector("form")
const titulo = document.getElementById("titulo")
const benvios = document.getElementById("benvio")

const baseDeDatos = {
    nombre: "joaquin",
    apellido: "martino"
}

benvios.onclick = (e) => {
    e.preventDefault();
    // console.log(e.target.matches)
    fetch("https://formsubmit.co/ajax/c28f8d349eb42baf495912e85212cb33",{
        method:"POST",
        body: new formData(e.target)
    })
        .then(res => res.ok ? res.json(): Promise.reject(res) )
        .then(json =>{
            console.log(json);
        })
        .catch(err=>{
            console.log(err)
        });
   
    Swal.fire(
        'Gracias!',
        'Tu Pedido esta siendo preparado',
        'success'
      )
}




// let nombre = document.querySelector("#nombre").value;
    // let apellido = document.querySelector("#apellido").value;

    // if (nombre != baseDeDatos.nombre || apellido != baseDeDatos.apellido)
    //     return alert("credenciales incorrectas")
    // alert("Bienvenidos")
    // document.querySelector("#container").innerHTML = "<h1>HOLISSS</h1>"



