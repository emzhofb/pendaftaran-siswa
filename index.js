const models = require('./models')

models.Siswa.findAll({include: [{model: models.Pendaftaran}]}).then(siswas => {
    siswas.forEach(siswa => {
        console.log(`${siswa.nama} | Pendaftaran: ${siswa.Pendaftaran.id}`)
    });
}).catch(err => console.log(err))