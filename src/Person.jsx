import {useState} from 'react'
import "./App.css"

const Person = () => {
    const[profile, setProfile] = useState(
        {
            fullName: 'John Doe',
            bio: 'A web developer',
            imgSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
            profession: 'Software Engineer',
          }
    );

    const [show, setShow] = useState(false)

           const togglePofile =() =>{
           setShow(!show);
     }
         
  return (
    <>
      <div>
       {show ? (
        <div>
            <img src={profile.imgSrc} alt="" />
            <h1>{profile.fullName}</h1>
            <h3>{profile.profession}</h3>
            <p>{profile.bio}</p>
            <button onClick={togglePofile}>Hide Profile</button>
        </div>
       ) : (
         <button onClick={togglePofile}>Show Profile</button>
       )}
     </div>
    </>
  );

  }
export default Person;





  
