import Hero from "../components/Hero";
import Navbar from "../components/Navbar_Authorcraft";
function Home_Authorcraft(){
    return(
<>
<Navbar/>
<Hero
cName="hero"
heroImg="https://images.unsplash.com/photo-1535905557558-afc4877a26fc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Pages and Prose: The Authorcraft Club"
text="Explore the world of literature with us! Our club offers engaging discussions, creative writing activities, and a vibrant community for book lovers."
buttonText="Register Today"
url="/"
btnClass="show"
/>
<footer className="footer">
        <p>&copy; Coruscate</p>
      </footer>
</>
    );
}

export default Home_Authorcraft;