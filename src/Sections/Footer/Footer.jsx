import classes from "./Footer.module.css"
import vk from '../../assets/vk.png'
import tg from '../../assets/tg.png'
import insta from '../../assets/insta.png'
import imgMain from '../../assets/main.png'

const Footer = () => {
  return (
    <div className="section--dark" id="contacts"> 
      <div className="container">
        
        <div className={`${classes.content} content`}>
          <div className={classes.textBox}>
            <h2 className="h2 line-dark-text">ЗаМетки Дѣявола</h2>
            
            <ul className={classes.list}>
              <li className={classes.item}>
                <a className={`${classes.link} hover`} href="https://max.ru/join/GV-" target="_blank">
                  <img className={classes.img} src={vk} alt="vk" />
                </a>
              </li>

              <li className={classes.item}>
                <a className={`${classes.link} hover`} href="https://t.me/+tvNuZzEYF-oxMDNl" target="_blank">
                  <img className={classes.img} src={tg} alt="tg" />
                </a>
              </li>

              <li className={classes.item}>
                <a className={`${classes.link} hover`} href="https://www.instagram.com/venefica_tattoo_666?igsh=MWNhOGd2YWZpb3RndQ==" target="_blank">
                  <img className={classes.img} src={insta} alt="insta" />
                </a>
              </li>
            </ul>
          </div>

          <img className={classes.imgMain} src={imgMain} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default Footer;