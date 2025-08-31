import Button from './evento/Button'

function Evento({ numero }) {
  function meuEvento() {
    console.log(`Opa, fui ativado! ${numero}`)
  }

  function segundoEvento() {
    console.log('Segundo evento!')
  }

  return (
    <div>
      <p>Clique para disparar o evento:</p>
      <Button text='Primeiro evento' evento={meuEvento} />
      <Button text='Segundo evento' evento={segundoEvento} />
      <button onClick={meuEvento}>Ativar!</button>
    </div>
  )
}

export default Evento