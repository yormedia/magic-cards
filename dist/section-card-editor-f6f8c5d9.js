import{s as e,$ as i,A as t,r as s,_ as o,e as n,t as a,n as c}from"./index-af6182d1.js";import{e as r,t as l,s as h,a as d,f as g}from"./textfield-5bc5bd2a.js";let f=class extends(r(e)){constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var e;return(null===(e=this._config)||void 0===e?void 0:e.name)||""}get _entity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity)||""}get _show_warning(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_warning)||!1}get _show_error(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_error)||!1}render(){if(!this.hass||!this._helpers)return i``;const e=Object.keys(this.hass.states);return i`
      <mwc-select
        naturalMenuWidth
        fixedMenuPosition
        label="Entity (Required)"
        .configValue=${"entity"}
        .value=${this._entity}
        @selected=${this._valueChanged}
        @closed=${e=>e.stopPropagation()}
      >
        ${e.map((e=>i`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
      </mwc-select>
      <mwc-textfield
        label="Name (Optional)"
        .value=${this._name}
        .configValue=${"name"}
        @input=${this._valueChanged}
      ></mwc-textfield>
      <mwc-formfield .label=${"Toggle warning "+(this._show_warning?"off":"on")}>
        <mwc-switch
          .checked=${!1!==this._show_warning}
          .configValue=${"show_warning"}
          @change=${this._valueChanged}
        ></mwc-switch>
      </mwc-formfield>
      <mwc-formfield .label=${"Toggle error "+(this._show_error?"off":"on")}>
        <mwc-switch
          .checked=${!1!==this._show_error}
          .configValue=${"show_error"}
          @change=${this._valueChanged}
        ></mwc-switch>
      </mwc-formfield>
    `}_initialize(){void 0!==this.hass&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_valueChanged(e){if(!this._config||!this.hass)return;const i=e.target;if(this[`_${i.configValue}`]!==i.value){if(i.configValue)if(""===i.value){const e=Object.assign({},this._config);delete e[i.configValue],this._config=e}else this._config=Object.assign(Object.assign({},this._config),{[i.configValue]:void 0!==i.checked?i.checked:i.value});t(this,"config-changed",{config:this._config})}}};f.elementDefinitions=Object.assign(Object.assign(Object.assign(Object.assign({},l),h),d),g),f.styles=s`
    mwc-select,
    mwc-textfield {
      margin-bottom: 16px;
      display: block;
    }
    mwc-formfield {
      padding-bottom: 8px;
    }
    mwc-switch {
      --mdc-theme-secondary: var(--switch-checked-color);
    }
  `,o([n({attribute:!1})],f.prototype,"hass",void 0),o([a()],f.prototype,"_config",void 0),o([a()],f.prototype,"_helpers",void 0),f=o([c("magic-section-card-editor")],f);export{f as magicSectionCardEditor};
