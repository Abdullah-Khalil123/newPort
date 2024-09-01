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
      onClick={() => {
        showDropDown(false)
      }}
    >
      <Link href={'/archive'}>
        <li>Playground</li>
      </Link>
      {/* <Link href={'/services'}>
        <li>Services</li>
      </Link> */}
      <Link href={'/contact'}>
        <li>Contact</li>
      </Link>
      <Link href={'/about'}>
        <li>About</li>
      </Link>
      <li onClick={() => {}}>
        <Toggle />
      </li>
    </ul>
  )
}

export default DropDown
