import "./Banner.css"

export default function Banner({link, banner}) {
  return (
    <section className="bannerSection">
        <div className="banner">
            <a href={link} target='blank_'></a>
        </div>
    </section>
  )
}
