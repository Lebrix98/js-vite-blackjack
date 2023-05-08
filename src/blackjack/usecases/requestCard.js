// Esta función me permite tomar una carta

/**
 * 
 * @param {Array<String>} nuevoDeck Es un arreglo de String
 * @returns {<String>} Retorna la carta del deck
 */
export const pedirCarta = (nuevoDeck) => {


    if ( !nuevoDeck || nuevoDeck.length === 0 ) throw new Error("No hay cartas en el deck");


    const carta = nuevoDeck.pop();

    return carta;
}
