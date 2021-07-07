import React from 'react';
import App from 'next/app';
import '../css/styles.css';

class Myapp extends App {
  rend() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
