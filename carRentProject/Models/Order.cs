//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace carRentProject.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Order
    {
        public int tp_OrderID { get; set; }
        public bool active { get; set; }
        public System.DateTime dateIn { get; set; }
        public System.DateTime dateOut { get; set; }
        public int tp_CarID { get; set; }
        public int tp_UserID { get; set; }
        public int agreement { get; set; }
    
        public virtual Car Car { get; set; }
        public virtual User User { get; set; }
    }
}
