import Image from "next/image";
const Post = () => {
  return (
    <div class="post">
      <div class="container">
        <div class="post-heading">
          <h1 class="post-heading-title">
            Quisque congue felis id dictum posuere.
          </h1>
          <div class="post-heading-info">
            <span class="post-heading-info-date">November 1, 2022</span>
            <span class="post-heading-info-readingtime">4 min read</span>
          </div>
        </div>
        <div class="post-article">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
            porttitor urna. In gravida, orci vel pretium lobortis, lorem purus
            auctor mauris, in sollicitudin orci enim vel enim. Integer consequat
            ex id tortor molestie accumsan. Quisque egestas, mi sed porta
            auctor, turpis sapien dignissim purus, et volutpat urna lorem
            blandit lectus.
          </p>
          <p>
            Nunc id risus vitae nisi hendrerit accumsan vel viverra mauris.
            Nullam sit amet magna sit amet risus accumsan sagittis id vitae
            neque. Morbi a odio vehicula, iaculis ligula ut, consectetur orci.
            Etiam accumsan consequat tellus ut feugiat.
          </p>
          <Image src="/post.jpg" alt="Post Name" width={800} height={440} />
          <h2>Condimentum vitae sapien mi quis</h2>
          <p>
            Maecenas quam nunc, sagittis non condimentum at, rutrum sit amet
            eros. Fusce rutrum, lectus in blandit sagittis, mi tortor
            ullamcorper mi, vitae vestibulum libero quam a nisi. In eu mauris et
            neque sodales porta eu eget dui. Nunc eu quam sit amet justo
            elementum mollis. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Sed laoreet metus nulla,
            in gravida urna rhoncus in. Proin laoreet semper tortor ac posuere.
            Cras non leo at ipsum fringilla ullamcorper.
          </p>
        </div>
        <div class="post-share">
          <a href="" class="post-share-item">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.71735 12C10.378 12 13.4736 7.38372 13.4736 3.38064C13.4736 3.24954 13.4709 3.11904 13.4649 2.98908C14.0672 2.56006 14.587 2.02885 15 1.42038C14.4486 1.6617 13.8552 1.82412 13.2327 1.89735C13.8681 1.52232 14.3559 0.92901 14.586 0.22179C13.9819 0.574558 13.321 0.823241 12.6318 0.95712C12.0702 0.36828 11.2707 0 10.3854 0C8.68588 0 7.30771 1.35666 7.30771 3.02895C7.30771 3.2667 7.33476 3.49788 7.38756 3.7197C4.82979 3.59301 2.56174 2.38755 1.04384 0.55458C0.770454 1.01689 0.626657 1.54232 0.627134 2.0772C0.627134 3.12822 1.17043 4.05603 1.99665 4.59885C1.50793 4.58416 1.02994 4.45422 0.602866 4.21995C0.602409 4.23267 0.602409 4.24506 0.602409 4.25865C0.602409 5.72574 1.6632 6.95067 3.07137 7.22823C2.8069 7.29913 2.53399 7.33498 2.25988 7.33482C2.06192 7.33482 1.86899 7.31565 1.68149 7.28022C2.07329 8.48388 3.20939 9.35979 4.55637 9.38427C3.50305 10.1969 2.17619 10.681 0.734085 10.681C0.488765 10.6812 0.243645 10.6672 0 10.639C1.36201 11.4984 2.97927 11.9998 4.7175 11.9998" />
            </svg>
            Twitter
          </a>
          <a href="" class="post-share-item">
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.41043 13.033V11.0675H2.05979C1.4928 11.0675 0.977639 10.8465 0.604486 10.4903C0.231491 10.1341 0 9.64198 0 9.1005L0 1.96701C0 1.42556 0.231472 0.9336 0.604486 0.577256C0.977482 0.221063 1.49277 0 2.05979 0H9.52977C10.0968 0 10.6119 0.221513 10.9851 0.577256C11.3581 0.933451 11.5896 1.42553 11.5896 1.96701V3.93249H14.9402C15.5072 3.93249 16.0224 4.15353 16.3955 4.50975C16.7685 4.86594 17 5.35802 17 5.8995V13.033C17 13.5744 16.7685 14.0664 16.3955 14.4227C16.0225 14.7789 15.5072 15 14.9402 15H7.47023C6.90323 15 6.38807 14.779 6.01492 14.4227C5.64192 14.0665 5.41043 13.5745 5.41043 13.033ZM5.41043 9.96814L5.41043 5.8995C5.41043 5.35805 5.6419 4.86609 6.01492 4.50975C6.38791 4.15355 6.9032 3.93249 7.47023 3.93249H10.4383V1.96701C10.4383 1.72884 10.3358 1.51191 10.171 1.35491C10.0061 1.19746 9.77891 1.09961 9.52999 1.09961H2.06002C1.81061 1.09961 1.58345 1.19746 1.41854 1.35491C1.25366 1.51237 1.15119 1.72931 1.15119 1.96701L1.15119 9.1005C1.15119 9.33867 1.25366 9.5556 1.41854 9.71308C1.58342 9.87053 1.8106 9.96838 2.06002 9.96838H5.41065L5.41043 9.96814ZM6.56188 10.5151V13.0337C6.56188 13.2719 6.66435 13.4888 6.82923 13.6458C6.99411 13.8032 7.22128 13.9011 7.4707 13.9011H14.9407C15.1901 13.9011 15.4172 13.8032 15.5822 13.6458C15.747 13.4883 15.8495 13.2714 15.8495 13.0332V5.89971C15.8495 5.66154 15.747 5.44461 15.5822 5.28713C15.4173 5.12968 15.1901 5.03183 14.9407 5.03183H7.4707C7.22129 5.03183 6.99413 5.12968 6.82923 5.28713C6.66435 5.44458 6.56188 5.66153 6.56188 5.89971L6.56188 10.5153V10.5151Z" />
            </svg>
            Share
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
