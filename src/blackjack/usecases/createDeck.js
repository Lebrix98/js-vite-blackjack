import _ from "underscore";

// Esta función crea un nuevo deck

/**
 * Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemploe: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} Retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length == 0) throw new Error("Tipo de Cartas es Obligatorio como un arreglo de String.")
    if (!tiposEspeciales || tiposEspeciales.length == 0) throw new Error("Tipos Especiales es Obligatorio como un arreglo de String.")

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
