"use client"
import styles from "./Video.module.scss";
import { useEffect } from "react";
export default function VideoCase({
  src,
  title,
  text,
}: {
  src: string;
  title: string;
  text?: string;
}) {
  useEffect(() => {
    const parent = document.getElementById(src);
    const video = parent?.querySelector(".video");
    const options: IntersectionObserverInit = {
      threshold: 0.1,
    };
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLVideoElement;
          target.src = src;
          observer.unobserve(entry.target);
        }
      });
    };
    const observer: IntersectionObserver = new IntersectionObserver(
      callback,
      options
    );
    video && observer.observe(video);
  }, []);

  return (
    <div className={styles.main} id={src}>
      <p>{title}</p>
      {text && <p>{text}</p>}

      <iframe
        className={`video ${styles.video}`}
        src={""}
        aria-describedby={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
export function VideoCase2({
  src,
  title,
  text,
}: {
  src: string;
  title: string;
  text?: string;
}) {
  useEffect(() => {
    const parent = document.getElementById(src);
    const video = parent?.querySelector(".video");
    const options: IntersectionObserverInit = {
      threshold: 0.1,
    };
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLVideoElement;
          target.src = src;
          observer.unobserve(entry.target);
        }
      });
    };
    const observer: IntersectionObserver = new IntersectionObserver(
      callback,
      options
    );
    video && observer.observe(video);
  }, []);

  return (
    <div className={styles.main} id={src}>
      <p>{title}</p>
      {text && <p>{text}</p>}

      <video
        className={`video ${styles.video}`}
        src={""}
        controls
        aria-describedby={src}
        title={title}
      />
    </div>
  );
}
