function Evento({ numero }) {
    function meuEvento(){
        console.log(`Ativou o evento!", ${numero}`);
    }
    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Disparar evento</button>
        </div>

        
    )
}

export default Evento