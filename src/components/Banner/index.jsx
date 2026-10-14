import "./Banner.css"

export default function Banner({link, bannerimg}) {
  return (
    <section className="bannerSection">
        <a href={link} target='blank_'>
        <div className="banner" style={{backgroundImage: `url(${bannerimg})`}}>
        </div>
        </a>
    </section>
  )
}
