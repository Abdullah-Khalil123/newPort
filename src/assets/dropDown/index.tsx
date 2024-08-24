import Link from 'next/link'
import style from './dropDown.module.css'
import Toggle from '@/assets/Toggle'

const DropDown = ({
  active,
  showDropDown,
}: {
  active: boolean
  showDropDown: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <ul
      className={`${style.dropdown} ${active ? style.active : ''}`}
      onClick={() => {
        showDropDown(false)
      }}
    >
      <Link href={'/archive'}>
        <li>Playground</li>
      </Link>
      <Link href={''}>
        <li>Services</li>
      </Link>
      <Link href={''}>
        <li>Case Studies</li>
      </Link>
      <Link href={''}>
        <li>About</li>
      </Link>
      <li onClick={() => {}}>
        <Toggle />
      </li>
    </ul>
  )
}

export default DropDown
