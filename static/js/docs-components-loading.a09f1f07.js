(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./docs/components/loading.mdx":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),s=t("./src/styled.ts"),l=t("./node_modules/react-transition-group/CSSTransition.js"),p=t.n(l);const m=s["b"].div`
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  width: 100%;
  background: ${({theme:e})=>e.primary};

  will-change: transform, opacity;
  z-index: 1000000;

  transition-property: transform, opacity;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);

  &.start {
    transform: scaleX(0.8);
  }

  &.end {
    transform: scaleX(1);
    opacity: 0;
  }
`;class c extends r.PureComponent{render(){return a.a.createElement(p.a,{classNames:{appear:"start",enterDone:"start",exit:"end"},timeout:200,in:this.props.loading,unmountOnExit:!0},a.a.createElement(m,null))}}c.defaultProps={loading:!1};var d=t("./src/components/Button/index.ts");class g extends r.PureComponent{constructor(){super(...arguments),this.state={loading:!1},this.onClick=(()=>{this.setState({loading:!this.state.loading})})}render(){return a.a.createElement("div",{style:{position:"relative"}},a.a.createElement(c,{loading:this.state.loading}),a.a.createElement("br",null),a.a.createElement(d.a,{onClick:this.onClick},"Toggle Loading"))}}const h=s["b"].div`
  display: inline-block;
  width: ${({width:e})=>e||"100%"};
  height: ${({height:e})=>e||"100%"};
  margin: 0;
  padding: 0;
  position: relative;

  &:after {
    display: block;
    top: 0;
    left: 0;
    animation: spin 750ms infinite linear;
    border: ${({borderSize:e})=>e} solid;
    border-radius: 100%;
    ${function({theme:e,color:n}){return s["a"]`
    border-color: ${n&&"light"!==n?e[n]:e.background};
    border-right-color: ${e.border};
    border-top-color: ${e.border};
  `}}
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;h.displayName="Spinner",h.defaultProps={borderSize:"2px"};var u=h;n.default=function(e){var n=e.components;return a.a.createElement(o.MDXTag,{name:"wrapper",components:n},a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"bar"}},a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#bar"}},a.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Bar"),a.a.createElement(i.d,{__position:0,__code:function(e){return e&&a.a.createElement(e.pre,{className:"react-prism language-jsx"},a.a.createElement("code",null,"<LoadingBarTest />"))},__rawCode:"<LoadingBarTest />"},a.a.createElement(g,null)),a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"spinner"}},a.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#spinner"}},a.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Spinner"),a.a.createElement(i.d,{__position:1,__code:function(e){return e&&a.a.createElement(e.pre,{className:"react-prism language-jsx"},a.a.createElement("code",null,'<Spinner\n  color="info"\n  width="50px"\n  height="50px"\n  style={{ margin: \'0.5rem\' }}\n/>\n<Spinner\n  color="primary"\n  width="50px"\n  height="50px"\n  borderSize="5px"\n  style={{ margin: \'0.5rem\' }}\n/>'))},__rawCode:'<Spinner\n  color="info"\n  width="50px"\n  height="50px"\n  style={{ margin: \'0.5rem\' }}\n/>\n<Spinner\n  color="primary"\n  width="50px"\n  height="50px"\n  borderSize="5px"\n  style={{ margin: \'0.5rem\' }}\n/>'},a.a.createElement(u,{color:"info",width:"50px",height:"50px",style:{margin:"0.5rem"}}),a.a.createElement(u,{color:"primary",width:"50px",height:"50px",borderSize:"5px",style:{margin:"0.5rem"}})))}}}]);