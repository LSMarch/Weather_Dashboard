const City = ({ name }) => {
    const formatCity = (name) => {
        // capitalizing the first letter
        // and the letter after a space
        const newName = name.toLowerCase().split('');
        newName[0] = newName[0].toUpperCase();

        if (newName.includes(" ")) {
            const space = newName.indexOf(" ");
            newName[space + 1] = newName[space + 1].toUpperCase();
        }
        return newName.join('');
    }

    return (
        formatCity(name)
    )
}

export default City;