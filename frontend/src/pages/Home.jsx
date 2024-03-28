import Header from "../components/Header"
import AvatarUpload from "../components/AvatarUpload"

const Home = () => {
  return (
    <div>
        <Header />
  
        <section >
            <div className="text-center">
            <h2 className="lg:text-[58px] md:text-[58px] text-[28px] text-[#3939b2] mt-16 mb-8 font-bold">Your Web3 username in <br />easy steps</h2>
            <p className="text-center lg:w-[50%] md:w-[50%] w-[80%] mx-auto text-[1.1rem]">Getting your Web3 username just got easier than ever. Follow these simple steps to claim your username and stand out in the decentralized world:</p>
            </div>
           <div className="w-[90%] mx-auto my-8">  
            <AvatarUpload />
           </div>

        </section>
    </div>
  )
}

export default Home