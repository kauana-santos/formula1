import "./Banner.css"

export default function Banner({link, bannerimg, titulo}) {
  return (
    <section className="bannerSection">
      <h2>{titulo}</h2>
        <a href={link} target='blank_'>
        <div className="banner" style={{backgroundImage: `url(${bannerimg})`}}>
        </div>
        </a>
    </section>
  )
}
