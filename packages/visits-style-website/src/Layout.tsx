import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';
import GlobalStyle from './globalStyle';
import Topbar from './components/Topbar';
import Footer from './components/Footer';

export default function Layout({ children, data }: any) {
  const [isDark, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const val = window.localStorage.getItem('darkTheme');
      if (val) {
        setDarkMode(JSON.parse(val));
      } else {
        const md = window.matchMedia('(prefers-color-scheme: dark)');
        setDarkMode(md.matches);
      }
    }
  }, []);

  const toggleTheme = () => {
    window.localStorage.setItem('darkTheme', String(!isDark));
    setDarkMode(!isDark);
  };

  const theme = isDark ? darkTheme : lightTheme;
  const current = data.mdx.parent.relativePath;

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Topbar current={current} toggleTheme={toggleTheme} isDark={isDark} />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
}
