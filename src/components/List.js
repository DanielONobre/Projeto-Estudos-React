import Item from "./Item";

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="KIA" ano_lancamento={1999}/>
                <Item marca="Renault" ano_lancamento={2005}/>
            </ul>
        </>
    )
}

export default List;