const arrayToMap = arr => {
    const map = arr?.reduce((acc, el) => {
        const {title, items} = el
        acc[title.toLowerCase()] = items
        return acc
    }, {})
    return map
}
export default arrayToMap