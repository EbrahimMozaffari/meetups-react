import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-6e636-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const meetups = [];
        for (const key in data){
          const meetup = {
            id:key,
            ...data[key]
          }
          meetups.push(meetup);
        }

        setLoadedMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <>
      <section>
        <h1>AllMeetups</h1>
        <MeetupList meetups={loadedMeetups} />
        {/* <ul>
            {DUMMY_DATA.map((meetup)=>{
                return(<li key={meetup.id}>{meetup.title}</li>)
            })}
            </ul> */}
      </section>
    </>
  );
}

export default AllMeetupsPage;
