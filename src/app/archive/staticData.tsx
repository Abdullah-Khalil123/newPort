interface projectDataProps {
  year: number
  project: string
  builtWith: string[]
  link: string | undefined
}

export const projectData: projectDataProps[] = [
  {
    year: 2023,
    project: 'E-commerce Platform',
    builtWith: ['React', 'Next.js', 'Tailwind CSS', 'Firebase'],
    link: 'https://github.com/Abdullah-Khalil123/Exclusive',
  },
  {
    year: 2022,
    project: 'Personal Portfolio',
    builtWith: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    link: 'https://horizon-web-works.firebaseapp.com/',
  },
  {
    year: 2021,
    project: 'Messaging App',
    builtWith: ['React', 'Redux', 'Node.js', 'MongoDB'],
    link: 'https://github.com/Abdullah-Khalil123/Messaging-App',
  },
  {
    year: 2023,
    project: 'Hotel Booking System',
    builtWith: ['Next.js', 'Express', 'MySQL'],
    link: 'https://github.com/Abdullah-Khalil123/Elysium',
  },
  {
    year: 2020,
    project: 'Food Delivery App',
    builtWith: ['Flutter', 'Firebase'],
    link: 'https://github.com/Abdullah-Khalil123/Flutter-Project',
  },
  {
    year: 2019,
    project: 'University Map Navigation',
    builtWith: ['C++', "Dijkstra's Algorithm"],
    link: undefined,
  },
  {
    year: 2022,
    project: 'AI Image Recognition',
    builtWith: ['TensorFlow', 'Python'],
    link: undefined,
  },
]
