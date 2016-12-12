﻿namespace WoMoCo.Services {

    export class CalendarEventService {
        private getEventsByUserResource;
        private getPullDownResource;

        public GetAllCalendarEvents() {
            return this.$resource('/api/calendarEvents').query();
        }

        public SaveCalendarEvent(calendarEvent) {
            return this.$resource(`/api/calendarEvents`).save(calendarEvent).$promise
                .then(() => {
                    calendarEvent = null;
                });
        }

        public GetCalendarEventById(id: number) {
            // return this.$resource(`/api/calendarEvents/:id`).get({id: id});
            let tempResource = this.$resource(`/api/calendarEvents/:id`);
            let tempResult = tempResource.get({ id: id });
            //console.log(tempResult);
            return tempResult;
        }

        public GetCalendarEventsByUser() {
            let tempList = this.getEventsByUserResource.getMyEvents();
            //console.log(tempList);
            return tempList;
        }

        public GetUsersForPullDown() {
            let tempResults = this.getPullDownResource.getUsersForPulldown();
            //console.log(tempResults);
            return tempResults;
        }

        public ShareThisEvent(shareCalenderEvent) {
            console.log("got to ShareThiseEvent ...");
            console.log(shareCalenderEvent);
            return this.$resource(`/api/calenderEvents/ShareEvent`).save(shareCalenderEvent);
        }

        public DeleteCalendarEvent(id: number) {
            return this.$resource(`/api/calendarEvents/:id`).delete({ id: id }).$promise
                .then(() => {
                    id = null;
                });
        }
        
        constructor(
            private $resource: angular.resource.IResourceService
        ) {
            this.getEventsByUserResource = $resource(`/api/calendarEvents`, null, {
                getMyEvents: {
                    method: `GET`,
                    url: `/api/calendarEvents/getMy`,
                    isArray: true
                }
            });
            this.getPullDownResource = $resource(`/api/users`, null, {
                getUsersForPulldown: {
                    method: `GET`,
                    url: `/api/users/GetUsersForPulldown`,
                    isArray: true
                }
            });
        }
    }

    angular.module('WoMoCo').service('calendarEventService', CalendarEventService);
}