const fs = require('fs');
const colors = require('colors');
colors.enable();

const crearTabla = async ( base, listar, hasta ) => {

    try {
        
        let salida = '';
        for (let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} es igual a ${ i * base}\n`;
        }

        if ( listar ){
            console.log('========================'.green);
            console.log(`   Tabla del ${colors.yellow(base)}`.green);
            console.log('========================'.green);
            console.log(salida .yellow);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
}



module.exports = {
    crearTabla
}