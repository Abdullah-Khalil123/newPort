import Link from 'next/link'
import style from './dropDown.module.css'
import Toggle from '@/assets/Toggle'
import { inter } from '@/app/layoutFont'
const DropDown = ({
  active,
  showDropDown,
}: {
  active: boolean
  showDropDown: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <ul
      className={`${style.dropdown} ${inter.className} ${
        active ? style.active : style.inActive
      }`}
    >
      <Link
        href={'/archive'}
        onClick={() => {
          showDropDown(false)
        }}
      >
        <li>Projects</li>
      </Link>
      {/* <Link href={'/services'}>
        <li>Services</li>
      </Link> */}
      <Link
        href={'/contact'}
        onClick={() => {
          showDropDown(false)
        }}
      >
        <li>Contact</li>
      </Link>
      <Link
        href={'/playground'}
        onClick={() => {
          showDropDown(false)
        }}
      >
        <li>Playground</li>
      </Link>
      <Link
        href={'/about'}
        onClick={() => {
          showDropDown(false)
        }}
      >
        <li>About</li>
      </Link>
      <li>
        <Toggle />
      </li>
    </ul>
  )
}

export default DropDown
