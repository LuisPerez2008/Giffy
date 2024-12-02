
const Gif = ({ title, id, url }) => {
  return (
    <a href={`#${id}`} key={id} className="Gif">
      <h4>{title}</h4>

      <img src={url} alt={title} />
    </a>
  )
}

export default Gif;

