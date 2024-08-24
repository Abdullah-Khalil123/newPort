import Chip from '@/assets/chip'
import style from './archive.module.css'
import { projectData } from './staticData'
import Image from 'next/image'
import arrow from '@/public/arrow.svg'
import Link from 'next/link'
const Archive = () => {
  return (
    <div className={style.archive}>
      <table>
        <tr className={style.tableRow}>
          <th>Year</th>
          <th>Project</th>
          <th className={style.built}>Built with</th>
          <th className={style.linkTd}>Link</th>
        </tr>
        {projectData.map((project) => (
          <tr className={style.tableRow} key={project.link}>
            <td className={style.year}>{project.year}</td>
            <td>
              <Link
                href={project.link ? project.link : ''}
                target="_blank"
                className={style.linkonProject}
              >
                <p>{project.project}</p>
              </Link>
            </td>
            <td className={style.builtWith}>
              {project.builtWith.map((item) => (
                <Chip text={item} key={item} />
              ))}
            </td>
            <td className={style.linkTd}>
              <div className={style.links}>
                <Link href={project.link ? project.link : ''} target="_blank">
                  {project.link ? project.link.replace('https://', '') : ''}
                </Link>
                {project.link ? (
                  <div className={style.ImageHolder}>
                    <Image src={arrow} fill alt={'arrow'} />
                  </div>
                ) : null}
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Archive
