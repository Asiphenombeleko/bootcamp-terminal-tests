document.addEventListener("alpine :init", () => {
   alpine.data("pizzaCart", () => {
     return{
          title :'Pizza Cart API',
             pizzas : [],
             username : 'Asiphenombeleko',
             cartId : '',
            cartPizzas : [],
            cartTotal : 0.00,
             getCart() {
               const getCartURL = 'https://pizza-api.projectcodex.net/api/pizza-cart/${this.cartId}/get'
               return axios.get(getCartURL);
             },
                 init(){
                      axios
                        .get('https://pizza-api.projectcodex.net/api/pizzas')
                        .then(result => {
                        //you can add more code here
                         //console.log(result.data)
                        this.pizzas = result.data.pizzas
                    });

                     this.getCart().then(result => {
                        const cartData = result.data;
                        this.cartPizzas = cartData.pizzas;
                       this.cartTotal = cartData.total
                  });
                    
            }    
        }
   })
});