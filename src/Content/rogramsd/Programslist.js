import { LuDumbbell } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { FaRunning } from "react-icons/fa";
import img from "../../image/s1.png"
import img1 from "../../image/f.png"
import img2 from "../../image/c.png"
import img3 from "../../image/h.png"
import { MdOutlineLocalFireDepartment } from "react-icons/md";
 const ProgramsL = [
    {
        logo:<LuDumbbell/>,
        Title:"Strength tranning",
        descp:"Strength training, also known as weight training or resistance training, involves the performance of physical exercises that are designed to improve strength and endurance. It is often associated with the lifting of weights.",
        img:img
    },
    {
        logo:<MdOutlineLocalFireDepartment/>,
        Title:"Fat burinig",
        descp:"Your body stores calories as fat to keep you alive and safe. There are many gimmicks that claim to amplify fat burning, such as working out in the fat-burning zone, spot reduction, and foods or supplements that supposedly make you burn more fat.",
        img:img1
    },
    {
        logo:<FaRunning/>,
        Title:"Cardio tranning",
        descp:"Cardio exercise, which is sometimes referred to as aerobic exercise, is any rhythmic activity that raises your heart rate into your target heart rate zone. This is the zone where you burn the most fat and calories.",
        img:img2
    },
    {
        logo:<CiHeart/>,
        Title:"Health fitness",
        descp:"A health and fitness club, also known as a gym or a fitness center, is a facility that provides equipment, programs, and services for physical fitness and exercise. These facilities typically have a variety of exercise equipment, such as treadmills, stationary bikes, weight machines, and free weights.",
        img:img3
    }
]
export default ProgramsL;