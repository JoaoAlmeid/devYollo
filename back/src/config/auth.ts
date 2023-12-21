export default {
    secret: process.env.JWT_SECRET || "myscret",
    expiresIn: "15m",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "myrefreshsecret",
    refreshExpiresIn: "7d"
}