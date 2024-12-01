import SignupForm from "../components/signupForm"
import backImg from './image1.png'
export default function Home() {
    return (
        <div style={{
            display: "flex",
        }}>
            <div
  style={{
    background: "cyan",
    height: "100vh",
    width: "50vw",
    backgroundImage: `url(${backImg})`, // Updated file name
    backgroundSize: "cover", // Ensure it covers the area
    backgroundRepeat: "no-repeat", // Prevent tiling
    backgroundPosition: "center" // Center the image
  }}
>
    <h1 style={{color:"white",marginTop:"70%",fontSize:"3rem",marginLeft:"10%",fontFamily:"Roboto",fontWeight:"900"}}>Discover new things on Superapp</h1>
</div>

            <div style={{
                background: "black",
                height: "100vh",
                width: "50vw"
            }}>
                <SignupForm />
            </div>
        </div>
    )
}