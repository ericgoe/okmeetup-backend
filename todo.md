# Actions

-   [x] Register participant | POST /participants
-   [x] Create new events and return the code | POST /events
-   [ ] Save possible appointments supplied by the user | POST /events/:id/possible-appointments
-   [x] Return the event data by id | GET /events/:id
-   [ ] Find an overlapping time by investigating possible appointments
        and save the result in the Event object | POST /events/:id/decide-time
