if (!process.env.SECRET) {
    throw new Error("SECRET environment variable must be set");
}

module.exports = {
    secret: process.env.SECRET
};