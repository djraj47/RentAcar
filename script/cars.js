const carArrays = [
    {
        brand: "astonMartin",
        models: [
            {
                id: 1,
                name: "Valhalla",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 2,
                name: "Vantage",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 3,
                name: "Valour",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 4,
                name: "Valkyrie",
                price: "",
                image: "images/showroom.jpg"
            }
        ]
    },
    {
        brand: "bentley",
        models: [
            {
                id: 1,
                name: "Bentayga EBW Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 2,
                name: "The Flying Spur Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 3,
                name: "Continental Gt Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 4,
                name: "Mulliner",
                price: "",
                image: "images/showroom.jpg"
            }
        ]
    },
    {
        brand: "ferrari",
        models: [
            {
                id: 1,
                name: "Bentayga EBW Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 2,
                name: "The Flying Spur Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 3,
                name: "Continental Gt Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 4,
                name: "Mulliner",
                price: "",
                image: "images/showroom.jpg"
            }
        ]
    },
    {
        brand: "ferrari",
        models: [
            {
                id: 1,
                name: "Bentayga EBW Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 2,
                name: "The Flying Spur Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 3,
                name: "Continental Gt Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 4,
                name: "Mulliner",
                price: "",
                image: "images/showroom.jpg"
            }
        ]
    },
    {
        brand: "ferrari",
        models: [
            {
                id: 1,
                name: "Bentayga EBW Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 2,
                name: "The Flying Spur Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 3,
                name: "Continental Gt Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 4,
                name: "Mulliner",
                price: "",
                image: "images/showroom.jpg"
            }
        ]
    },
    {
        brand: "ferrari",
        models: [
            {
                id: 1,
                name: "Bentayga EBW Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 2,
                name: "The Flying Spur Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 3,
                name: "Continental Gt Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 4,
                name: "Mulliner",
                price: "",
                image: "images/showroom.jpg"
            }
        ]
    },
    {
        brand: "ferrari",
        models: [
            {
                id: 1,
                name: "Bentayga EBW Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 2,
                name: "The Flying Spur Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 3,
                name: "Continental Gt Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 4,
                name: "Mulliner",
                price: "",
                image: "images/showroom.jpg"
            }
        ]
    },
    {
        brand: "ferrari",
        models: [
            {
                id: 1,
                name: "Bentayga EBW Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 2,
                name: "The Flying Spur Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 3,
                name: "Continental Gt Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 4,
                name: "Mulliner",
                price: "",
                image: "images/showroom.jpg"
            }
        ]
    },
    {
        brand: "ferrari",
        models: [
            {
                id: 1,
                name: "Bentayga EBW Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 2,
                name: "The Flying Spur Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 3,
                name: "Continental Gt Range",
                price: "",
                image: "images/showroom.jpg"
            },
            {
                id: 4,
                name: "Mulliner",
                price: "",
                image: "images/showroom.jpg"
            }
        ]
    }
];

const carListContainer = document.querySelector('.cars');

carArrays.forEach(carBrand => {
    const brandContainer = document.createElement('div');
    brandContainer.classList.add('brand-container');
    const heading = document.createElement('h2');

    heading.textContent = carBrand.brand;
    brandContainer.appendChild(heading);

    carBrand.models.forEach(car => {
        const carElement = document.createElement('div');
        carElement.innerHTML = `
        
        <div class="cars-bio">
        <div class="img">
            <img src=${car.image}>
        </div>

        <div class="car-carausel">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div class="car-d">

            <div class="car-name">
                <h3>${car.name}<br> 2019</h3>
            </div>

            <div class="car-price">
                <p>$300</p>
            </div>
        </div>

        <div class="car-description">
            <div class="car-milage">
                <p>18/ 26</p> <i class="fa-solid fa-gas-pump"></i>
            </div>

            <div class="car-features">
                <p>autometic</p><i class="fa-brands fa-elementor"></i>
            </div>

            <div class="route">
                <p>100</p><i class="fa-solid fa-road"></i>
            </div>
        </div>
    </div>



`;
        brandContainer.appendChild(carElement);
    });

    carListContainer.appendChild(brandContainer);
});


