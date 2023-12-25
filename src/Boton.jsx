function Boton({numero, nombre = "Default"}){
    return (
        <button onClick={function(){
            alert ("hiciste click")
        }}> {numero} - {nombre} </button>
    )
}

export default Boton;