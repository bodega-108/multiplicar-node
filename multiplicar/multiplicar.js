const fs = require('fs');;


crearArchivo = (base)=>{
    new Promise((resolve,reject)=>{

        if(!Number(base)){

            reject('NO es un nuevo numero');
            return
        }

        let data = '';

for(let i=1; i<=10; i++){
    data+=(`${base} * ${i} = ${base * i}\n`);
}

fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err)=>{
    if(err) reject(err)
        resolve(`archivo-${base}.txt`)
    
});
    })
}

module.exports = {
    crearArchivo
}
