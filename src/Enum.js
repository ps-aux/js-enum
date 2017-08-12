class Enum {

    values

    constructor (name, values) {
        if (!name)
            throw new Error('Enum name not specified')
        if (!values)
            throw new Error('Enum values name not specified')

        const asObjects = Object.entries(values)
            .map(([k, v]) => ({
                id: name + '/' + k,
                name: k,
                value: v
            }))

        this.values = asObjects

        asObjects.forEach(o => {
            this[o.name] = o
        })

    }

    has = val => this.values.includes(val)
}

export default Enum
