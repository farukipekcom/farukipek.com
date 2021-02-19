import logo from "./logo.svg";
import "./App.css";
import images from "./img";
function App() {
  return (
    <div className="App">
      <header class="Header">
        <div class="container">
          <a
            href="https://farukipek.com/"
            class="Header-logo"
            title="Faruk İpek"
          >
            Faruk İpek
          </a>
          <div class="Header-menu">
            <a
              href="mailto:faruk@farukipek.com"
              class="underline-link"
              title="İletişim"
            >
              İletişim
            </a>
          </div>
        </div>
      </header>
      <main class="Main">
        <section class="About">
          <div class="container">
            <div class="About-text">
              <h1 class="About-title">
                Merhaba ✋ Ben Faruk, Freelance front-end developer olarak
                Konya'da yaşıyorum.
              </h1>
              <p class="About-details">
                2013 yılında ilk adımlarımı attığım bu sektörde, şu an freelance
                front-end developer olarak çalışıyorum. İzlediğim dizileri{" "}
                <a
                  href="https://www.pogdesign.co.uk/cat/profile/farukipekcom"
                  target="_blank"
                  class="underline-about-link"
                >
                  PogDesign
                </a>
                ’da listeliyorum. Çektiğim fotoğraflara{" "}
                <a
                  href="https://www.instagram.com/farukipekcom/"
                  target="_blank"
                  class="underline-about-link"
                >
                  Instagram
                </a>{" "}
                profilimden bakabilirsiniz. Dinlediğim şarkılara ise{" "}
                <a
                  href="https://open.spotify.com/user/11133935052"
                  target="_blank"
                  class="underline-about-link"
                >
                  Spotify
                </a>{" "}
                profilimden erişebilirsiniz.
              </p>
            </div>
            <div class="About-photo">
              <img src={images.profile} alt="Faruk İpek" />
            </div>
          </div>
        </section>

        <section class="Work">
          <div class="container">
            <h2 class="Work-title">Çalışmalar</h2>
          </div>
          <div class="container">
            <div class="works">
              <a href="http://skyair.com.tr/" target="_blank" rel="noreferrer">
                <img src={images.skyair} alt="SkyAir" class="Work-photo" />
              </a>
              <div class="Work-details">
                <p class="tag">Web Tasarım / SEO</p>
                <h4 class="title">
                  <a
                    href="http://skyair.com.tr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SkyAir
                  </a>
                </h4>
              </div>
            </div>
            <div class="works">
              <a
                href="http://www.secilbayrak.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={images.secilbayrak}
                  alt="Seçil Bayrak"
                  class="Work-photo"
                />
              </a>
              <div class="Work-details">
                <p class="tag">Web Tasarım / E-Ticaret / SEO</p>
                <h4 class="title">
                  <a
                    href="http://www.secilbayrak.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Seçil Bayrak{" "}
                  </a>
                </h4>
              </div>
            </div>
            <div class="works">
              <a
                href="http://www.parkzon.net/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={images.parkzonshop}
                  alt="Parkzon Shop"
                  class="Work-photo"
                />
              </a>
              <div class="Work-details">
                <p class="tag">Web Tasarım / E-Ticaret / SEO</p>
                <h4 class="title">
                  <a
                    href="http://www.parkzon.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Parkzon Shop
                  </a>
                </h4>
              </div>
            </div>
            <div class="works">
              <a
                href="https://depremguvenlik.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={images.depremguvenlik}
                  alt="Deprem Güvenlik"
                  class="Work-photo"
                />
              </a>
              <div class="Work-details">
                <p class="tag">Web Tasarım / SEO</p>
                <h4 class="title">
                  <a
                    href="https://depremguvenlik.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deprem Güvenlik
                  </a>
                </h4>
              </div>
            </div>

            <div class="works">
              <a
                href="https://anaokulundaguvenlik.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={images.anaokulundaguvenlik}
                  alt="Anaokulunda Güvenlik"
                  class="Work-photo"
                />
              </a>
              <div class="Work-details">
                <p class="tag">Web Tasarım / SEO</p>
                <h4 class="title">
                  <a
                    href="https://anaokulundaguvenlik.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Anaokulunda Güvenlik
                  </a>
                </h4>
              </div>
            </div>

            <div class="works">
              <a
                href="https://karabuksuaritma.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={images.aktifpazarlama}
                  alt="Karabük Su Arıtma"
                  class="Work-photo"
                />
              </a>
              <div class="Work-details">
                <p class="tag">Web Tasarım / SEO</p>
                <h4 class="title">
                  <a
                    href="https://karabuksuaritma.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Aktif Pazarlama
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="Footer">
        <div class="container">
          <div class="Footer-copyright">
            <p>© 2019 Faruk İpek</p>
          </div>
          <div class="Footer-social">
            <a href="https://www.facebook.com/farukipekcom" target="_blank">
              Facebook
            </a>
            <a href="https://twitter.com/farukipekcom" target="_blank">
              Twitter
            </a>
            <a href="https://www.instagram.com/farukipekcom/" target="_blank">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/farukipekcom/" target="_blank">
              Linkedin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
