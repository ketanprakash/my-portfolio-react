import './project.styles.scss'

const Project = ({imageUrl, codeUrl, hostedUrl, title}) => (
  <div className="project">
    <img className="image" src={imageUrl} alt={title} />
    <div className="links">
      <a target="_blank" rel="noreferrer" href={codeUrl}><div className="link">CODE</div></a>
      <a target="_blank" rel="noreferrer" className="link-hosted" href={hostedUrl}><div className="link">LINK</div></a>
    </div>
    <div className="title">
      {title}
    </div>
  </div>
)

export default Project;