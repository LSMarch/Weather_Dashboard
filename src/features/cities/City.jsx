const City = ({ name }) => {

    const formatCity = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    return (
        formatCity(name)
    )
}

export default City