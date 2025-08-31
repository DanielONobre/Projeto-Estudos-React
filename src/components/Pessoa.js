function Pessoa({ name, idade, profissao, foto }) {
    return (
        <div>
            <img src={foto} alt={nome}/>
            <h2>Nome: {name}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    );
}

export default Pessoa;