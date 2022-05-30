exports.middlewareGlobal = (req, res, next) => {
    if (req.body.cliente) {
        console.log();
        console.log(`Vi qe voce posto ${req.body.cliente}`);
        console.log();
    }

    next();
}

exports.outroMiddleware = (req, res, next) => {
    console.log("Sou seu outro middleware");
    next();
}