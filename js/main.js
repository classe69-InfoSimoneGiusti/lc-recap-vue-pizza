const app = new Vue (

    {

        el: '#app',
        data: {

            pizzas: [
                {
                    name: 'Pizza Margherita',
                    description: "La regina delle pizze, amata da grandi e piccini. Il suo gusto unico ed intramontabile mette sempre d'accordo tutti.",
                    url: 'margherita.jpg',
                    base_price: 6,
                    specialTag: false
                },
                {
                    name: 'Pizza Salamino',
                    description: "Per chi ama i gusti forti e decisi, la nostra pizza con il salamino piccante. Vincitrice di 2 premi come pizza più innovativa dell'anno. LOL",
                    url: 'salamino.jpg',
                    base_price: 7,
                    specialTag: false
                },
                {
                    name: 'Pizza Hawai',
                    description: "A grande richiesta di Stefano, la nostra pizza speciale! Gusto unico e delicato, le sue note fruttate evocano ricordi di nottate passate consumando tonnellate di digestivo Brioschi!",
                    url: 'ananas.jpg',
                    base_price: 9,
                    specialTag: true
                }
            ],

            sizes: [
                {
                    name: 'Normale',
                    extra_price: 0
                },
                {
                    name: 'Grande',
                    extra_price: 2
                },
                {
                    name: 'Teglia',
                    extra_price: 6
                }
            ],

            mixtures: [
                {
                    name: 'Normale',
                    extra_price: 0
                },
                {
                    name: 'Integrale',
                    extra_price: 1
                },
                {
                    name: 'Lunga lievitazione',
                    extra_price: 2
                },
            ],

            selectedPizza: 0,
            selectedSize: 0,
            selectedMixture: 0,

            qty: 1

           /*  price: 0 */

        },

        methods: {
            getExtraPriceLabel(item) {
                if (item.extra_price > 0) {
                    return `${item.name} +${item.extra_price}€`;
                } else {
                    return item.name;
                }
            },

            decrease() {
                if (this.qty > 1) {
                    this.qty--;
                }
            },

            increase() {
                this.qty++;
            }
            
        },

        computed: {

            totalPrice() {

                const pizzaPrice = this.pizzas[this.selectedPizza].base_price;
                const sizePrice = this.sizes[this.selectedSize].extra_price;
                const mixturePrice = this.mixtures[this.selectedMixture].extra_price;

                return pizzaPrice + sizePrice + mixturePrice;

            }

        }


    }

)