export const getGuias = async () => {
    try {
        const res = await fetch("http://localhost:4000/api/guias");
        return await res.json();
    } catch (error) {
        console.error("Error al obtener guías:", error);
        return [];
    }
};

export const getGuiaById = async (_id) => {
    try {
        const res = await fetch(
            `http://localhost:4000/api/guias/${_id}`
        );
        return await res.json();
    } catch (error) {
        console.error("Error al obtener guía:", error);
        return null;
    }
};