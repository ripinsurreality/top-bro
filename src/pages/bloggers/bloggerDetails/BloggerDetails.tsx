import Nav from "@modules/nav/Nav"
import React from "react"
import { useParams } from "react-router-dom"
import "./bloggerDetails.sass"
import Blogger from "@modules/blogger/Blogger"
import { bloggers } from "../Bloggers"
import YtColor from "@modules/icons/YtColor"
import VkColor from "@modules/icons/VkColor"
import IgColor from "@modules/icons/IgColor"
import ArrowLeft from "@modules/icons/ArrowLeft"
import ArrowRight from "@modules/icons/ArrowRight"
import SwiperCore, { Navigation, Scrollbar } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import PlayButton from "@modules/icons/PlayButton"

SwiperCore.use([Navigation, Scrollbar])

interface BloggerDetailsProps {}

interface BloggerDetailParams {
  id: string
}

const BloggerDetails: React.FC<BloggerDetailsProps> = () => {
  const { id } = useParams<BloggerDetailParams>()
  const vids: number[] = []
  for (let i = 1; i < 7; i++) {
    vids.push(i)
  }

  return (
    <>
      <Nav
        breadcrumbs={[
          { title: "Главная", link: "/" },
          { title: "Блогеры", link: "/bloggers" },
          { title: "Константин Константинопольский", link: `/bloggers/${id}` },
        ]}
      />
      <main className="blogger-details">
        <section className="blogger-details__section">
          <div className="details">
            <img
              src={`/assets/img/portrait${parseInt(id, 10) + 1}.png`}
              alt="portrait"
              className="details__img"
            />
            <div className="details__info">
              <h1 className="details__name">
                Константин Константинович Константинопольский
              </h1>
              <ul className="details__media">
                <li className="details__media-item">
                  <a
                    target="_blank"
                    href="https://youtube.com"
                    className="details__medial-link"
                  >
                    <YtColor className="details__media-svg" />
                  </a>
                  <div className="details__media-subs">
                    <h3 className="details__media-count">3 160 000+</h3>
                    Подписчиков
                  </div>
                </li>
                <li className="details__media-item">
                  <a
                    target="_blank"
                    href="https://vk.com"
                    className="details__medial-link"
                  >
                    <VkColor className="details__media-svg" />
                  </a>
                  <div className="details__media-subs">
                    <h3 className="details__media-count">3 160 000+</h3>
                    Подписчиков
                  </div>
                </li>
                <li className="details__media-item">
                  <a
                    target="_blank"
                    href="https://instagram.com"
                    className="details__medial-link"
                  >
                    <IgColor className="details__media-svg" />
                  </a>
                  <div className="details__media-subs">
                    <h3 className="details__media-count">3 160 000+</h3>
                    Подписчиков
                  </div>
                </li>
              </ul>
              <div className="details__channel">
                <h3 className="details__channel-title">Информация о канале</h3>
                <p className="details__channel-info">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi eveniet repellendus ab autem quo tenetur odio,
                  labore incidunt placeat! Iure omnis sunt dolorum consequuntur
                  odit nulla fuga repudiandae provident, quam iste quis tempore,
                  ipsam ipsa, perferendis voluptatibus? Quae, asperiores eaque.
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Alias, laboriosam veritatis officiis eius blanditiis dolorum,
                  quas quod omnis qui facilis praesentium ducimus voluptate
                  ipsum ea atque, recusandae nulla perspiciatis ad impedit
                  doloremque perferendis quis quidem cum consequuntur? Sed
                  dolore aliquid repudiandae ut officia quasi quae alias unde
                  excepturi explicabo, consectetur itaque a officiis sequi
                  doloribus fuga repellat ipsa nisi aspernatur exercitationem!
                  Ad delectus cupiditate doloremque iste recusandae velit
                  exercitationem enim itaque deserunt ipsa expedita numquam
                  commodi consequatur consectetur impedit culpa magnam, cum
                  neque assumenda? Corrupti repudiandae quo amet nostrum odit
                  nisi quaerat, esse vero, praesentium id quidem voluptate
                  laudantium dolores. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Veniam omnis laudantium tempore recusandae
                  in quidem impedit asperiores ducimus voluptate tenetur, porro
                  corporis deleniti magnam neque unde, optio animi quibusdam
                  nemo, quas pariatur enim odio magni explicabo! Ullam mollitia
                  nam eos ut, aspernatur illum quo tempore assumenda et aliquam
                  aperiam itaque accusantium delectus iste nobis eaque, qui
                  totam perferendis labore, fugit numquam. Minus asperiores
                  aliquid facere perferendis quasi rerum magni, vel aperiam sit
                  iste maxime fuga, mollitia fugit sint ipsa similique. Minima
                  fugiat omnis vel libero minus asperiores labore, ea
                  cupiditate. Placeat, ducimus odit ullam unde voluptate
                  quibusdam eaque incidunt eos exercitationem mollitia tenetur
                  dolores aliquam quam et officiis fuga provident nisi
                  reiciendis iusto corporis ipsam optio? Quam nisi id eveniet ex
                  cumque corporis, ipsum iste. Numquam alias officia labore
                  praesentium modi recusandae temporibus, autem debitis vitae?
                  Enim provident molestiae in nostrum! Repudiandae veniam autem
                  optio voluptas aliquid, quos expedita dolores sunt,
                  dignissimos sint neque unde consequatur, quae vero soluta aut!
                  Odit tempore minima consequatur excepturi repellat facere sint
                  asperiores unde doloribus quidem, sunt vero porro molestias in
                  accusamus cum placeat nobis nemo, veritatis esse ab officia.
                  Deleniti a tenetur autem nam, laboriosam nulla hic ad error,
                  impedit id eum voluptas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="blogger-details__section">
          <h1 className="blogger-details__title">Последние ролики</h1>
          <div className="last-vids">
            <ul className="last-vids__list">
              {vids.map((item) => {
                return (
                  <li className="last-vids__item">
                    <img
                      src={`/assets/img/vid${item}.png`}
                      alt="video thumbnail"
                      className="last-vids__thumbnail"
                    />
                    <div className="last-vids__overlay"></div>
                    <PlayButton className="last-vids__playbutton" />
                  </li>
                )
              })}
            </ul>
          </div>
        </section>
        <section className="blogger-details__section">
          <h1 className="blogger-details__title">Другие блогеры</h1>
          <div className="others">
            <ul>
              <Swiper
                spaceBetween={20}
                slidesPerView={"auto"}
                freeMode={true}
                scrollbar={{
                  draggable: true,
                  el: ".scroller__bar",
                  dragClass: "scroller__thumb",
                }}
                navigation={{
                  prevEl: ".scroller__arrow-left",
                  nextEl: ".scroller__arrow-right",
                }}
              >
                {bloggers.map((item, i) => {
                  const { name, img, media } = item
                  return (
                    <SwiperSlide
                      key={`slide-${i}`}
                      style={{ width: "fit-content" }}
                    >
                      <Blogger
                        name={name}
                        img={img}
                        media={media}
                        id={String(i)}
                        key={i}
                      />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </ul>
            <div className="scroller">
              <div className="scroller__arrow-left">
                <ArrowLeft />
              </div>
              <div className="scroller__bar">
                <div className="scroller__track"></div>
                <div className="scroller__thumb"></div>
              </div>
              <div className="scroller__arrow-right">
                <ArrowRight />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default BloggerDetails
