import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-projects-79a2a-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        const meetups = [];
        setIsLoading(false);
        for(const key in data) {
          const meetup = {
            id:key,
            ...data[key]
          }
          meetups.push(meetup)
        }
        setMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList items={meetups} />
    </div>
  );
}

export default AllMeetups;
