/** @type {import('next').NextConfig} */
const nextConfig = {

    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home",

            },{
                source: "/calculo-imc",
                destination: "/imc"
            },{
                source: "/calculo-media",
                destination: "/media",

            }
        ]
    }
};

export default nextConfig;



