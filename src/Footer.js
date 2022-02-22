function Footer(props) {
    console.log(props)
    return (
        <footer>
            <p>Este es el Footer</p>
            <p>Hola {props.nombre}</p>
        </footer>
    )
}

export default Footer