import React, { useRef, useState } from "react";
import Head from 'next/head';
import TopBar from "./TopBar";
import Script from 'next/script';

import styles from "@/styles/component/Wrapper.module.scss";

import localFont from '@next/font/local'

const notoFont = localFont({
  src: '../public/fonts/Noto_Sans_JP/NotoSansJP-VariableFont_wght.ttf',
  variable: '--font-noto'
});

const interFont = localFont({
  src: '../public/fonts/Inter/Inter-VariableFont_slnt,wght.ttf',
  variable: '--font-inter'
})

export default function Wrapper(props) {
  const { Component, pageProps } = props;
  const bodyRef = useRef(null)

  return (
    <div style={{ height: "100%" }} className={`${interFont.variable} ${notoFont.variable}`}>
        <Head>
            <title>Healthy</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="format-detection" content="telephone=no" />
            <link rel="shortcut icon" href="/logo.svg" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossOrigin="anonymous"></link>
            <link rel="stylesheet" href="/fonts/Inter/Inter-VariableFont_slnt,wght.ttf" />
        </Head>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous"></Script>
        <div className={styles.wrapper} >
            <TopBar />
            <div className={styles.body} ref={bodyRef}>
              <Component {...pageProps} />
              <div className={styles.footer}>
                <div className={styles.footer_content}>会員登録</div>
                <div className={styles.footer_content}>運営会社</div>
                <div className={styles.footer_content}>利用規約</div>
                <div className={styles.footer_content}>個人情報の取扱について</div>
                <div className={styles.footer_content}>特定商取引法に基づく表記</div>
                <div className={styles.footer_content}>お問い合わせ</div>
              </div>
            </div>
            <div className={styles.button_scroll_top} onClick={() => bodyRef.current.scrollTo({ top: 0, behavior: 'smooth' })}>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z" fill="white" fillOpacity="0.01" stroke="#777777"/>
                <path d="M30.5852 28.042L24.0002 21.6579L17.4151 28.042L16.5389 27.1925L24.0002 19.959L31.4614 27.1925L30.5852 28.042Z" fill="#777777"/>
              </svg>
            </div>
        </div>
    </div>
  );
}
