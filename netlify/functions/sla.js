exports.handler = async (event) => {
    try {
        const { sla, period } = JSON.parse(event.body);

        // Vérification des paramètres
        if (!sla || !['yearly', 'quaterly', 'monthly', 'daily'].includes(period)) {
            return {
                statusCode: 400,
                body: JSON.stringify({ status: "error", reason: "bad parameters" }),
            };
        }

        // Si les paramètres sont corrects, renvoie la durée (peu importe le calcul ici)
        const nbHours = 12;
        const nbMinutes = 13;
        const nbSeconds = 14;

        return {
            statusCode: 200,
            body: JSON.stringify({ status: "success", data: { nbHours, nbMinutes, nbSeconds } }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ status: "error", reason: "Internal server error" }),
        };
    }
};
