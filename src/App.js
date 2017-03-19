import React, { Component } from 'react';
import { Container, Footer, Heading, PageHeader, Divider, Button, Panel, PanelHeader, ButtonCircle } from 'rebass';
import Icon from 'react-geomicons';
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
          <PageHeader description="A list of microservices I've published with now." heading='ls' />
          <Panel theme="default">
            <PanelHeader>Flags</PanelHeader>
            A microservice that returns a flag for a given country code. <br /><br />
            <a href='https://github.com/hugomd/micro-flags'>Source available on GitHub</a>.<br /><br />
            <Button backgroundColor="primary" color="white" inverted rounded href="https://f.now.sh/au">See it in action</Button>
          </Panel>

          <Panel theme="default">
            <PanelHeader>Emoji</PanelHeader>
            A microservice that returns an emoji for a given emoji shortname.<br /><br />
            <a href='https://github.com/hugomd/micro-emoji'>Source available on GitHub</a>.<br /><br />
            <Button backgroundColor="primary" color="white" inverted rounded href="https://e.now.sh/smile/512">See it in action</Button>
          </Panel>

          <Panel theme="default">
            <PanelHeader>Up</PanelHeader>
            A microservice that returns based on whether a website is up or not.<br /><br />
            <a href='https://github.com/hugomd/micro-up'>Source available on GitHub</a>.<br /><br />
            <Button backgroundColor="primary" color="white" inverted rounded href="https://up.now.sh/https://ls.now.sh/">See it in action</Button>
          </Panel>

          <Panel theme="default">
            <PanelHeader>Description</PanelHeader>
            A microservice to get the description of a GitHub repository ✍️.<br /><br />
            <a href='https://github.com/hugomd/micro-description'>Source available on GitHub</a>.<br /><br />
            <Button backgroundColor="primary" color="white" inverted rounded href="https://d.now.sh/hugomd/ls">See it in action</Button>
          </Panel>

          <Footer>
            Made with &hearts; in Melbourne, by&nbsp;<a href='https://hugo.md/'>Hugo</a>.
          </Footer>
        </Container>
      </div>
    );
  }
}

export default App;
