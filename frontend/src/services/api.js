const APIcriaturas = "http://localhost:4000/api/criaturas";
const APIobjetos = "http://localhost:4000/api/objetos";

// Obtener todas las criaturas
export async function getCriaturas() {
    const res = await fetch(APIcriaturas);
    return res.json();
}

// Obtener una criatura por nombre
export async function getCriatura(nombre) {
    const res = await fetch(`${APIcriaturas}/${nombre}`);
    return res.json();
}

// Obtener todos los objetos
export async function getObjetos() {
    const res = await fetch(APIobjetos);
    return res.json();
}