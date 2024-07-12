import React from "react";
import PageTitle from "../components/PageTitle";
import PageText from "../components/PageText";
import Image from "next/image";
export default function Photos() {
  return (
    <main>
      <div className="photos-heading">
        <PageTitle>Photos</PageTitle>
        <PageText>
          I love taking photos of the world around me, capturing moments and
          emotions as they happen.
        </PageText>
      </div>
      <div className="photos-gallery">
        <Image src="/1.jpg" width={304} height={360} alt="Faruk Ipek"></Image>
        <Image src="/2.jpg" width={304} height={360} alt="Faruk Ipek"></Image>
        <Image src="/3.jpg" width={304} height={360} alt="Faruk Ipek"></Image>
        <Image src="/4.jpg" width={304} height={360} alt="Faruk Ipek"></Image>
        <Image src="/5.jpg" width={304} height={360} alt="Faruk Ipek"></Image>
        <Image src="/6.jpg" width={304} height={360} alt="Faruk Ipek"></Image>
        <Image src="/1.jpg" width={304} height={360} alt="Faruk Ipek"></Image>
        <Image src="/2.jpg" width={304} height={360} alt="Faruk Ipek"></Image>
        <Image src="/3.jpg" width={304} height={360} alt="Faruk Ipek"></Image>
      </div>
    </main>
  );
}
