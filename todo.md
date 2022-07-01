# Actions

-   [x] Register participant | POST /participants
-   [ ] Create new events and return the data | POST /events
        -   [ ]assign participant to newly created event
-   [ ] Save possible appointments supplied by the user | POST /events/:id/possible-appointments
-   [ ] Return the event data by id | GET /events/:id
-   [ ] Find an overlapping time by investigating possible appointments
        and save the result in the Event object | POST /events/:id/decide-time
