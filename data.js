const CONFIG = {

    phone: "60134300057",

    consultant: {

        name: "Muhammad Pahrolrozi",

        position: "Sales Executive",

        company: "Bank Islam Malaysia Berhad",

        email: "mpahrol@bankislam.com.my"

    }

};

const RULES = {

    kerajaan: {
        tetap: {
            income: 2000
        },
        kontrak: {
            income: 3000,
            service: "2plus"
        }
    },

    berkanun: {
        income: 2000
    },

    glc: {
        income: 2000,
        service: "6plus",
        status: "tetap"
    },

    professional: {
        income: 2000,
        service: "6plus",
        status: "tetap"
    },

    swasta: {

        plc_mnc: {
            income: 2000,
            service: "6plus"
        },

        prominent: {
            income: 2000,
            service: "2plus",
            operation: "over5"
        },

        private: {
            income: 2000,
            service: "2plus",
            operation: "over5"
        }

    }

};

const SPECIAL_INDUSTRY = [

    "manufacturing",
    "transport",
    "construction"

];