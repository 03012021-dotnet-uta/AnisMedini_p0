using System.Linq;
using System.Collections.Generic;

namespace PizzaBox.Domain
{
    public class Order{
        public List<Pizza> Pizzas { get; set; }

        public override string ToString(){

            return "Your Pizza = " + Pizzas;
        }

    }

}
