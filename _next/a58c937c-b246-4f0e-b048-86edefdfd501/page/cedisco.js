
          window.__NEXT_REGISTER_PAGE('/cedisco', function() {
            var comp = module.exports=webpackJsonp([5],{19:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),s=n(l),i=a(0),r=n(i),o=function(e){var t=e.constant,a=e.title,n=e.customStyle,l={borderColor:t.color};return r.default.createElement("div",{style:n,className:"jsx-2155082703 links"},r.default.createElement("h2",{className:"jsx-2155082703"},a||"Pour + d'infos"),r.default.createElement("div",{className:"jsx-2155082703 wrapper"},t.externalLinks.map(function(e,t){return r.default.createElement("a",{style:l,key:t,href:e.href,target:"_blank",className:"jsx-2155082703"},r.default.createElement("img",{src:e.icon,alt:"",className:"jsx-2155082703"}),e.label)})),r.default.createElement(s.default,{styleId:"2155082703",css:[".links.jsx-2155082703{padding:4em 0;}","h2.jsx-2155082703{text-align:center;margin-top:0;margin-bottom:2em;font-size:2em;font-weight:500;font-family:'Quicksand',sans-serif;}",".wrapper.jsx-2155082703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:600px;margin:auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","img.jsx-2155082703{max-height:20px;margin-right:20px;}",".wrapper.jsx-2155082703 a.jsx-2155082703{width:calc(49% - 3px);border:1px solid white;text-align:center;padding:1em 0;text-decoration:none;font-family:'Marvel',sans-serif;text-transform:uppercase;color:#333;font-size:1.4em;}",".wrapper.jsx-2155082703 a.right.jsx-2155082703{border-left:none;}"]}))};t.default=o},20:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(10),s=n(l),i=a(3),r=n(i),o=a(4),c=n(o),d=a(11),u=n(d),f=a(12),m=n(f),p=a(1),x=n(p),b=a(0),h=n(b),g=a(8),w=n(g),y=function(e){function t(e){(0,r.default)(this,t);var a=(0,u.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.constant=e.constant,a.state={codeEtablissement:"",email:""},a.handleChangeEmail=a.handleChangeEmail.bind(a),a.handleChangeCodeEtablissement=a.handleChangeCodeEtablissement.bind(a),a.handleSubmit=a.handleSubmit.bind(a),a}return(0,m.default)(t,e),(0,c.default)(t,[{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleChangeCodeEtablissement",value:function(e){this.setState({codeEtablissement:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=encodeURIComponent(this.state.codeEtablissement),n=encodeURIComponent(this.state.email),l=encodeURIComponent("telechargement depuis la page "+this.constant.id+".html"),s=void 0;s=this.constant.emailEntryRef?"&entry."+this.constant.emailEntryRef+"="+n+"&entry."+this.constant.pageEntryRef+"="+l:" - "+n+" - "+l;var i=this.constant.formUrl+a+s+"&submit=submit",r=new XMLHttpRequest;r.open("POST",i,!0),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.onreadystatechange=function(){window.location.assign(t.constant.downloadUrl,"_blank")},r.send()}},{key:"render",value:function(){var e=this;return h.default.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"jsx-1626402373"},h.default.createElement("label",{className:"jsx-1626402373"},"Code Etablissement, RNE/UAI:",h.default.createElement("input",{type:"text",value:this.state.codeEtablissement,onChange:this.handleChangeCodeEtablissement,required:!0,"aria-required":"true",className:"jsx-1626402373"})),h.default.createElement("label",{className:"jsx-1626402373"},"Email:",h.default.createElement("input",{type:"email",value:this.state.email,onChange:this.handleChangeEmail,required:!0,"aria-required":"true",className:"jsx-1626402373"})),h.default.createElement("input",{type:"submit",value:"Télécharger",className:"jsx-1626402373"}),h.default.createElement("div",{className:"jsx-1626402373 small"},this.constant.title," fonctionne sur : Microsoft Access 2019, 2016, 2013, 2010. Si vous ne disposez pas de Microsoft Access vous pouvez ",h.default.createElement(w.default,{href:"https://www.microsoft.com/fr-fr/download/details.aspx?id=10910"},h.default.createElement("a",{className:"jsx-1626402373"},"télécharger gratuitement le Runtime Access 2010."))),h.default.createElement(x.default,{styleId:"1626402373",css:["form.jsx-1626402373{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}","label.jsx-1626402373{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:10px 0;font-size:0.9em;width:100%;}","input.jsx-1626402373{border:1px #eee solid;border-radius:2px;background-color:#eee;line-height:1.8em;padding:5px 10px;}","input.jsx-1626402373:invalid{box-shadow:none;}","input[type=\"submit\"].jsx-1626402373{margin:10px 0;color:#fff;text-align:center;outline:0;cursor:pointer;border:none;border-radius:2px;padding:10px 20px;-webkit-tap-highlight-color:transparent;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2);background-color:#26a69a;font-family:'Marvel',sans-serif;text-transform:uppercase;-webkit-letter-spacing:0.6px;-moz-letter-spacing:0.6px;-ms-letter-spacing:0.6px;letter-spacing:0.6px;}",".small.jsx-1626402373{margin-top:65px;color:#444;font-size:0.8em;}"]}))}}]),t}(h.default.Component);t.default=y},21:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),s=n(l),i=a(0),r=n(i),o=a(5),c=function(e){var t=e.steps;return r.default.createElement("div",{className:"jsx-2493310968"},r.default.createElement("h2",{className:"jsx-2493310968"},"Comment ça marche ?"),r.default.createElement("ul",{className:"jsx-2493310968"},t.map(function(e,t){return r.default.createElement("li",{key:t,className:"jsx-2493310968"},e)})),r.default.createElement(s.default,{styleId:"2493310968",css:["h2.jsx-2493310968{text-align:center;margin:5em 0 2em;font-size:2em;font-weight:500;font-family:'Quicksand',sans-serif;}","ul.jsx-2493310968{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;list-style:none;background-color:#eee;padding:2em;}","li.jsx-2493310968{border-radius:50%;width:200px;height:200px;padding:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:"+o.Colors.primary+";color:white;line-height:1.4em;font-size:1.2em;font-family:'Open Sans',sans-serif;}","li.jsx-2493310968:first-child{background-color:#fff;color:"+o.Colors.primary+";}"]}))};t.default=c},236:function(e,t,a){e.exports=a(237)},237:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),s=n(l),i=a(0),r=n(i),o=a(13),c=n(o),d=a(26),u=n(d),f=a(27),m=n(f),p=a(20),x=n(p),b=a(36),h=n(b),g=a(35),w=n(g),y=a(21),k=n(y),j=a(19),E=n(j),v=a(28),C=(n(v),a(5)),_=C.Products.find(function(e){return"cedisco"===e.id}),N=function(){return r.default.createElement(c.default,{title:_.title},r.default.createElement("main",null,r.default.createElement(m.default,{constant:_}),r.default.createElement("div",{className:"jsx-1880657286 wrapper"},r.default.createElement(u.default,{description:_.description,downloadComponent:r.default.createElement(x.default,{constant:_})}),r.default.createElement(h.default,{points:_.salesPoints}),r.default.createElement(s.default,{styleId:"1880657286",css:[".wrapper.jsx-1880657286{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}"]})),r.default.createElement(k.default,{steps:["Télécharger","Importer la base élèves et la base des personnels","Saisir les constantes de l'établissement","Nommer les membres du conseil","Démarrer la première procédure"]}),r.default.createElement(E.default,{constant:_}),r.default.createElement(w.default,{simple:"Comme tous les outils Open Académie, CédiSCO vise à simplifier concrètement vos opérations de gestion des établissements scolaires. CédiSCO professionnalise la procédure des conseils de discipline, notamment pour accélérer la rescolarisation en cas d'exclusion.",gratuit:"Elaboré par des agents du service public pour eux-mêmes et leurs collègues, CédiSCO est libre et gratuit. Cette liberté est matérialisée par la licence EUPL 1.2, validée par l'Union européenne dans ses 17 langues officielles."})))};t.default=N},28:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),s=n(l),i=a(0),r=n(i),o=function(e){var t=e.title,a=e.url;return r.default.createElement("div",{className:"jsx-3873927885"},r.default.createElement("h2",{className:"jsx-3873927885"},t),r.default.createElement("div",{className:"jsx-3873927885 container"},r.default.createElement("iframe",{src:a,allowfullscreen:!0,className:"jsx-3873927885"})),r.default.createElement(s.default,{styleId:"3873927885",css:["h2.jsx-3873927885{text-align:center;margin:5em 0 2em;font-size:2em;font-weight:500;font-family:'Quicksand',sans-serif;}",".container.jsx-3873927885{position:relative;height:0;overflow:hidden;padding-bottom:36vw;width:64vw;margin:auto;}","iframe.jsx-3873927885{position:absolute;top:0;left:0;width:100%;height:100%;}"]}))};t.default=o}},[236]);
            return { page: comp.default }
          })
        