import images from "../img";
import React from "react";
import { Helmet } from "react-helmet";
class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Sayfa Bulunamadı | Faruk İpek</title>
          <meta
            name="description"
            content="Merhaba! Ben Faruk İpek. 2013 yılında ilk adımlarımı attığım bu sektörde, şu an freelance front-end developer olarak devam etmekteyim."
          />
          <style>{"body { background-color: #72E0F7; }"}</style>
        </Helmet>
        <h1
          style={{ textAlign: "center", fontSize: "36px", fontWeight: "bold" }}
        >
          Sayfa Bulunamadı
        </h1>
        <img src={images.gif} alt="" style={{ margin: "0 auto" }} />
      </div>
    );
  }
}
export default NotFoundPage;
