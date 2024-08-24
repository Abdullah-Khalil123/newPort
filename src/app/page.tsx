import Home from './Sections/Main'
import WorkingExperience from './Sections/WorkingExperience'
// import SelectedWorks from "./Sections/SelectedWorks";
import Footer from '@/components/footer'
import style from './home.module.css'
import Works from './Sections/Works'
import horizon from '@/public/WorkImages/horizon.png'
import elysium from '@/public/WorkImages/elysium.png'
const WorkItems = [
  {
    year: 2023,
    title: 'Horizon',
    description:
      'Horizon is a startup web development portfolio organization that showcases cutting-edge projects and innovative solutions. It focuses on delivering high-quality web applications and digital experiences, emphasizing modern design, user-friendly interfaces, and scalable technologies.',
    imageSrc: horizon, // Replace with actual image link if available
  },
  {
    year: 2023,
    title: 'Elysium-Reports Hotel Booking React App',
    description:
      'A web application to manage and handle data for apartments booked on Airbnb. Developed using TypeScript, it allows for seamless data tracking and reporting.',
    imageSrc: elysium,
  },
  {
    year: 2023,
    title: 'Indoor Positioning System using Flutter',
    description:
      'An indoor positioning system using Bluetooth Low Energy (BLE) beacons, developed with Flutter. It calculates distances based on RSSI and provides real-time updates.',
    imageSrc: undefined,
  },
  {
    year: 2023,
    title: 'Conways Game of Life',
    description:
      "A project based on Conway's Game of Life, developed for the Design and Analysis of Algorithms course. It showcases algorithmic design and optimization techniques.",
    imageSrc: undefined,
  },
]

const Front = () => {
  return (
    <div className={style.front}>
      <Home />
      <WorkingExperience />
      {/* <SelectedWorks /> */}
      <Works items={WorkItems} />
      <Footer />
    </div>
  )
}

export default Front
