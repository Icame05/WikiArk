// Criatura
export const getCriaturas = async () => {
    try {
        const res = await fetch("http://localhost:4000/api/criaturas");
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error al obtener criaturas:", error);
        return [];
    }
};

// Detalle de criatura
export const getCriaturaByName = async (name) => {
    try {
        const res = await fetch(
            `http://localhost:4000/api/criaturas/${encodeURIComponent(name)}`
        );

        if (!res.ok) throw new Error("Error al obtener criatura");

        return await res.json();
    } catch (error) {
        console.error("Error al obtener criatura:", error);
        return null;
    }
};