export const handleChange = (setState) => {
    return (e) => {
        setState(e.target.value)
    }
}