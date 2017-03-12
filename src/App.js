import React, { Component } from 'react';
import { Container, Footer, Heading, PageHeader } from 'rebass';
import init from './basicTheme';

class App extends Component {
  render() {
    const {
       fontFamily,
       fontWeight,
       letterSpacing,
       color,
       backgroundColor,
       drawerOpen,
       overlayOpen
    } = init;

    return (
      <div style={{
        fontFamily,
        fontWeight,
        letterSpacing,
        color,
        backgroundColor
        }}>
        <Container>
          <PageHeader
            description="A list of microservices I've published with now."
            heading='ls' />
          <a href='https://f.now.sh/'>micro-flags</a> &mdash; a microservice that returns a flag for a given country code.<br />
            <a href='https://e.now.sh/'>micro-emoji</a> &mdash; a microservice that returns an emoji for a given emoji shortname.<br />
            <a href='https://up.now.sh/'>micro-up</a> &mdash; a microservice that returns based on whether a website is up or not.<br />
          <Footer>
            Made with &hearts; in Melbourne, by&nbsp;<a href='https://hugo.md/'>Hugo</a>.
          </Footer>
        </Container>
      </div>
    );
  }
}

export default App;
