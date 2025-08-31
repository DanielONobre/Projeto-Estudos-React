function Form() {
    function cadastrarUsuario() {
        e.preventDefault();
        console.log("Cadastrou o usuário")
    }

 return (
    <div>
        <h1>Meu Formulário</h1>
        <form onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" placeholder="Digite seu nome">Nome:</input>
            </div>
            <div>
                <input type="submit" value="Cadastrar"></input>
            </div>
        </form>
    </div>
 )
}

 export default Form