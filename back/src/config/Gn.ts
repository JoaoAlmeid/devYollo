import path from "path";

const cert = path.join(
    __dirname,
    `../../certs/${process.env.GN_PIX_CERT}.p12`
);

export = {
    sandbox: false,
    client_id: process.env.GN_CLIENT_ID as string,
    client_secret: process.env.GN_CLIENT_SECRET as string,
    pix_cert: cert
}