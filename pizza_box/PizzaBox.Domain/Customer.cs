using System.Linq;
using System.Collections.Generic;

namespace PizzaBox.Domain
{
    public class Customer
    {
        public string CustomerName { get; set; }
        public string CustomerEmail { get; set; }

         public override string ToString(){
            return "Customer Name is "+ CustomerName + "Email is "+ CustomerEmail;
        }

    }
}
