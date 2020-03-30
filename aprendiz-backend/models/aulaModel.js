const mongoose = require("mongoose");

var AulaSchema = new mongoose.Schema({

    //Dados do aluno
    professor: {
        type: String,
        required: [true, 'Professor obrigatório']
    },
    materia: {
        type: String,
        required: [true, 'Matéria obrigatória']
    },
    data: {
        type: Date,
        required: [true, 'Data obrigatória']
    },
    hora: {
        type: String,
        required: [true, 'Hora obrigatório']
    },
    conteudo: {
        type: String,
        required: [true, 'Conteúdo obrigatório']
    },
    serie: {
        type: Number,
        required: [true, 'Série obrigatória']
    },
    turma: {
        type: String,
        required: [true, 'Turma obrigatória']
    },
    turno: {
        type: String,
        required: [true, 'Turno obrigatório']
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('Aula', AulaSchema);