import { Html } from "@react-three/drei";
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

const Loader = () => {
  return (
    <Html>
        <div className=" absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <Ring
  size="40"
  stroke="5"
  bgOpacity="0"
  speed="2"
  color="white" 
/>
        </div>
    </Html>
  );
};

export default Loader;



// Default values shown
