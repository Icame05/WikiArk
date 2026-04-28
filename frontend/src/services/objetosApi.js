export const getObjetos = async () => {
    try {
        const res = await fetch("http://localhost:4000/api/objetos");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error al obtener objetos:", error);
        return [];
    }
};

export const getObjetoByName = async (name) => {
    try {
        const res = await fetch(
            `http://localhost:4000/api/objetos/${encodeURIComponent(name)}`
        );

        if (!res.ok) throw new Error("Error al obtener objeto");

        return await res.json();
    } catch (error) {
        console.error("Error al obtener objeto:", error);
        return null;
    }
};