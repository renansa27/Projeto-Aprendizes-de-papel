const mongoose = require("mongoose");
var Float = require('mongoose-float').loadType(mongoose);

var AlunosSchema = new mongoose.Schema({

    //Dados do aluno
    nome: {
        type: String,
        required: [true, 'Nome obrigatório']
    },
    nascimento: {
        type: Date,
        required: [true, 'Data obrigatória']
    },
    idade: {
        type: Number,
        required: false
    },
    nacionalidade: {
        type: String,
        required: [true, 'Nacionalidade obrigatória']
    },
    cidadeNascimento: {
        type: String,
        required: [true, 'Cidade obrigatória']
    },
    sexo: {
        type: String,
        required: [true, 'Sexo obrigatório']
    },
    ufNascimento: {
        type: String,
        required: [true, 'UF obrigatório']
    },
    tipoSanguineo: {
        type: String,
        required: [true, 'Tipo sanguíneo obrigatório']
    },
    cpf: {
        type: String,
        required: false
    },
    especial: {
        type: String,
        required: [true, 'Necessidades especiais obrigatório']
    },
    emailAluno: {
        type: String,
        required: false
    },

    //Dados RG aluno
    rg: {
        type: String,
        required: false
    },
    orgaoEmissor: {
        type: String,
        required: false
    },
    dataEmissao: {
        type: Date,
        required: false
    },

    //Dados dos pais
    nomePai: {
        type: String,
        required: [true, 'Nome pai obrigatório']
    },
    rgPai: {
        type: String,
        required: [true, 'RG pai obrigatório']
    },
    nomeMae: {
        type: String,
        required: [true, 'Nome mãe obrigatório']
    },
    rgMae: {
        type: String,
        required: [true, 'RG mãe obrigatório']
    },

    //Contato Pais
    telefonePai: {
        type: String,
        required: [true, 'Telefone pai obrigatório']
    },
    emailPai: {
        type: String,
        required: [true, 'email pai obrigatório']
    },
    telefoneMae: {
        type: String,
        required: [true, 'Telefone mae obrigatório']
    },
    emailMae: {
        type: String,
        required: [true, 'Email mãe obrigatório']
    },

    //Dados na escola
    mensalidade: {
        type: Float,
        required: [true, 'Mensalidade obrigatória']
    },
    matricula: {
        type: String,
        required: [true, 'Matrícula obrigatória']
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

module.exports = mongoose.model('Alunos', AlunosSchema);