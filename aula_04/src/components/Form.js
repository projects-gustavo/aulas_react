import { useState } from 'react'

function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Usuário cadastrado!")
        console.log(`O usuário ${nome} com a senha ${senha} foi cadastrado com sucesso!`)
    }

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()

    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome</label><br></br>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Digite seu nome..."
                            onChange={(e) => setNome(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="nome">Senha</label><br></br>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha..."
                            onChange={(e) => setSenha(e.target.value)}
                        />
                </div>
                <div className="align-items-center">
                    <input type="submit" value="ENVIAR"></input>
                </div>
            </form>
        </div>
    )
}

export default Form;