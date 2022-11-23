/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`About Me`}
      description="Get to know me! ">
      <header className={clsx('hero hero--primary', styles.heroBanner, 'heroBannerAboutMe')}>
        <div className="container">
          <h1 className="hero__title">About Me</h1>
          <p className="hero__subtitle">Get to know me!</p>
          <div className={styles.buttons}>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={styles.about}>
                <div>
                  <img
                    className={styles.aboutProfilePic}
                    src={useBaseUrl("img/hope.webp")}
                    alt="Umut Hope YILDIRIM Logo"
                  />
                </div>
                <div class={styles.aboutText}>
                  <h2>Hi</h2>
                  <p>
                    🇹🇷 My name is Umut YILDIRIM, and I am a Full Stack Software Engineer based in Turkey.
                  </p>
                  <p>
                    🚀 Whether it's {" "}
                    <Link to={useBaseUrl("projects/")}>
                      websites, apps, or IoT
                    </Link>
                    , I love building cool stuff with tech.
                  </p>
                  <p>
                    🌏 To me, coding is the closest thing to magic we have on Earth.
                  </p>
                  <p>
                    👨‍💻  My Raspberry Pi has been helping me write beautiful code since 2016.
                  </p>
                  <p>
                    🏆  In high school, my friends and I attended ten hackathons and won seven of them.
                  </p>
                  <p>
                    🎒 I was a Computer Programming Associate Degree Student at {" "}
                    <a href="https://www.isikun.edu.tr/international">
                      Isik University
                    </a>{" "}
                    from 2020 to 2022.
                  </p>
                  <p>
                    🎒 A certificate in Computer Science was recently awarded to me by <a href="https://flatironschool.com/">Flatiron School</a>.
                  </p>
                  <p>
                    ☁️ Cloud-native and open source are my passions.{" "}<br />
                    🔥 I'm a big fan of Firebase and Google Cloud Platform..<br />
                    At present, I am working on a Firebase and Cloudflare project.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}