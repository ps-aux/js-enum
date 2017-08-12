const CONSOLE_MAPPING = {
    trace: 'debug'
}

const objToMsg = obj => {
    // JSON.strinfigy might be needed sometimes
    // for example with Raven.js
    return obj
}

class Logger {

    log = (level, msg, data) => {
        // Try to remap
        level = CONSOLE_MAPPING[level] || level
        const logger = console[level] || console.info

        const args = [msg]
        if (data)
            args.push(objToMsg(data))

        logger(...args)
    }

    info = (msg, data) => this.log('info', msg, data)

    debug = (msg, data) => this.log('debug', msg, data)

    trace = (msg, data) => this.log('trace', msg, data)

    error = (...args) => {
        let toBeLogged = 'An error occurred'
        console.debug(args.length)
        if (args.length > 0) {
            console.error.apply(console, args)
        } else {
            console.error(toBeLogged)
        }
    }
}

export default Logger
