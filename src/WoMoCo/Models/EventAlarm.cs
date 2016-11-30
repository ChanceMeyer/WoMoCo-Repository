﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WoMoCo.Models
{
    public class EventAlarm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime AlarmTime { get; set; }
        public string AlarmMethod { get; set; }
        public CalenderEvent Event { get; set; }
        public ApplicationUser Owner { get; set; }
    }
}
