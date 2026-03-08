import React from "react";
import Section1 from "./components/section1/Section1";


function App() {
  const user=[
    {
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
      intro: '',
      color: '#10b981', // Emerald Green
      tag: 'Premium'
    },
    {
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      intro: '',
      color: '#8b5cf6', // Violet
      tag: 'Loyal'
    },
    {
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
      intro: '',
      color: '#ef4444', // Red
      tag: 'At Risk'
    },
    {
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
      intro: '',
      color: '#f59e0b', // Amber
      tag: 'Newcomer'
    },
    {
      img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=600&auto=format&fit=crop",
      intro: '',
      color: '#06b6d4', // Cyan
      tag: 'Active'
    },
    {
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
      intro: '',
      color: '#14b8a6', // Teal
      tag: 'Upgraded'
    },
    {
      img:"https://media.istockphoto.com/id/2208637349/photo/smiling-latin-hispanic-female-marketing-manager-professional-it-specialist-working-browsing.jpg?s=2048x2048&w=is&k=20&c=9QK0eq956GR-vhLRqL3XZDVI6AhQzItQyBm3gJhypaE=",
      intro:'',
      color:'blue',
      tag:'satisfied'
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D",
      intro:'',
      color:'orange',
      tag:'Underserve'
    },
    {
      img:"https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D",
      intro:'',
      color:'pink',
      tag:'Underbanked'
    },
  ]
  return (
    <div>
      <Section1 user={user} />
      
    </div>
  );
}

export default App;
