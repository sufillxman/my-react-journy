import React from 'react'
import Card from './componets/Card'

const jobsData = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    time: "5 days ago",
    title: "Senior UI/UX Designer",
    type: "Part-time",
    level: "Senior Level",
    salary: "120$/hr",
    location: "San Francisco, CA"
  },
  {
    id: 2,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    time: "2 days ago",
    title: "Frontend Developer",
    type: "Full-time",
    level: "Mid Level",
    salary: "150$/hr",
    location: "Mountain View, CA"
  },
  {
    id: 3,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    time: "1 day ago",
    title: "Backend Engineer",
    type: "Contract",
    level: "Senior Level",
    salary: "130$/hr",
    location: "Seattle, WA"
  },
  {
    id: 4,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    time: "3 days ago",
    title: "React Developer",
    type: "Full-time",
    level: "Junior Level",
    salary: "90$/hr",
    location: "Remote"
  },
  {
    id: 5,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    time: "1 week ago",
    title: "Product Designer",
    type: "Full-time",
    level: "Senior Level",
    salary: "180$/hr",
    location: "Cupertino, CA"
  },
  {
    id: 6,
    company: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    time: "4 hours ago",
    title: "Sound Engineer",
    type: "Contract",
    level: "Mid Level",
    salary: "110$/hr",
    location: "New York, NY"
  },
  {
    id: 7,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    time: "2 weeks ago",
    title: "Data Scientist",
    type: "Full-time",
    level: "Lead Level",
    salary: "200$/hr",
    location: "Menlo Park, CA"
  },
  {
    id: 8,
    company: "Airbnb",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
    time: "Just now",
    title: "DevOps Engineer",
    type: "Part-time",
    level: "Mid Level",
    salary: "140$/hr",
    location: "Remote"
  },
  {
    id: 9,
    company: "Uber",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    time: "6 days ago",
    title: "Android Developer",
    type: "Full-time",
    level: "Senior Level",
    salary: "160$/hr",
    location: "San Francisco, CA"
  },
  {
    id: 10,
    company: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    time: "12 hours ago",
    title: "Software QA",
    type: "Contract",
    level: "Junior Level",
    salary: "85$/hr",
    location: "Austin, TX"
  }
];
function App() {
  return (
    <div className="perent">
    {jobsData.map(function(data,idx){
     return <div key={idx}>
       <Card  company={data.company} logo={data.logo} time={data.time} title={data.title} type={data.type} level={data.level} location={data.location} salary={data.salary} />
     </div>
    })}

    </div>
  )
}

export default App