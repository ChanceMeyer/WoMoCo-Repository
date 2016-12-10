﻿namespace WoMoCo.Services {
    export class EventAlarmService {

        public getAllEventAlarms() {
            return this.$resource(`/api/eventAlarm`).query();
            //return this.$resource('/api/calendarEvents').query();
        }

        public saveEventAlarm(eventAlarm) {
            return this.$resource(`/api/eventAlarm`).save(eventAlarm).$promise
                .then(() => {
                    eventAlarm = null;
                });
        }

        public setEventAlarm(eventAlarm, calendarEvent) {
            //console.log(eventAlarm);
            //console.log(calendarEvent);
            // get the date and time from the calendar Event
            let eventDateTime = calendarEvent.eventDate;
            console.log(eventDateTime);
        }

        constructor(
            private $resource: angular.resource.IResourceService
        ) {

        }
    }
    angular.module(`WoMoCo`).service(`eventAlarmService`, EventAlarmService);
}