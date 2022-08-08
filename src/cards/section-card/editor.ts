/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, TemplateResult, css, CSSResultGroup } from 'lit';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

import {getCardData} from "../../global/constants";
const card = getCardData('section');

import { ScopedRegistryHost } from '@lit-labs/scoped-registry-mixin';
import { MagicSectionCardConfig } from './types';

import { customElement, property, state } from 'lit/decorators';
import { formfieldDefinition } from '../../../elements/formfield';
import { selectDefinition } from '../../../elements/select';
import { switchDefinition } from '../../../elements/switch';
import { textfieldDefinition } from '../../../elements/textfield';

@customElement(card.editor.prefixedtype)
export class MagicSectionCardEditor extends ScopedRegistryHost(LitElement) implements LovelaceCardEditor {
    @property({ attribute: false }) public hass?: HomeAssistant;

    @state() private _config?: MagicSectionCardConfig;

    @state() private _helpers?: any;

    @state() _selectedTab = 0;
    @state() _selectedCard = 0;

    private _initialized = false;

    static elementDefinitions = {
        ...textfieldDefinition,
        ...selectDefinition,
        ...switchDefinition,
        ...formfieldDefinition,
    };

    _handleSwitchTab(ev: CustomEvent) {
        this._selectedTab = parseInt(ev.detail.index, 10);
    }

    public setConfig(config: MagicSectionCardConfig): void {
        this._config = config;

        this.loadCardHelpers();
    }

    protected shouldUpdate(): boolean {
        if (!this._initialized) {
            this._initialize();
        }

        return true;
    }

    get _name(): string {
        return this._config?.name || '';
    }

    get _entity(): string {
        return this._config?.entity || '';
    }

    get _show_warning(): boolean {
        return this._config?.show_warning || false;
    }

    get _show_error(): boolean {
        return this._config?.show_error || false;
    }

    protected render(): TemplateResult | void {
        if (!this.hass || !this._helpers) {
            return html``;
        }

        // You can restrict on domain type
        const entities = Object.keys(this.hass.states);

        return html`
        <div class="card-config">
            <div class="toolbar">
              <mwc-tab-bar
                .activeIndex=${this._selectedTab}
                @MDCTabBar:activated=${this._handleSwitchTab}
              >
                  <mwc-tab label="Design">
                      <button role="tab" aria-selected="true" tabindex="0" class="mdc-tab mdc-tab--active">
                        <span class="mdc-tab__content">
                            <span class="mdc-tab__text-label">Design</span>
                        </span>
                        <mwc-ripple primary=""></mwc-ripple>
                      </button>
                  </mwc-tab>
                  <mwc-tab label="Sections">
                      <button role="tab" aria-selected="true" tabindex="0" class="mdc-tab mdc-tab--active">
                        <span class="mdc-tab__content">
                            <span class="mdc-tab__text-label">Section</span>
                        </span>
                          <mwc-ripple primary=""></mwc-ripple>
                      </button>
                  </mwc-tab>
              </mwc-tab-bar>
            </div>
            <div id="editor">
              <mwc-select
                naturalMenuWidth
                fixedMenuPosition
                label="Entity (Required)"
                .configValue=${'entity'}
                .value=${this._entity}
                @selected=${this._valueChanged}
                @closed=${(ev) => ev.stopPropagation()}
              >
                ${entities.map((entity) => {
                    return html`<mwc-list-item .value=${entity}>${entity}</mwc-list-item>`;
                })}
              </mwc-select>
              <mwc-textfield
                label="Name (Optional)"
                .value=${this._name}
                .configValue=${'name'}
                @input=${this._valueChanged}
              ></mwc-textfield>
              <mwc-formfield .label=${`Toggle warning ${this._show_warning ? 'off' : 'on'}`}>
                <mwc-switch
                  .checked=${(this._show_warning)}
                  .configValue=${'show_warning'}
                  @change=${this._valueChanged}
                ></mwc-switch>
              </mwc-formfield>
              <mwc-formfield .label=${`Toggle error ${this._show_error ? 'off' : 'on'}`}>
                <mwc-switch
                  .checked=${(this._show_error)}
                  .configValue=${'show_error'}
                  @change=${this._valueChanged}
                ></mwc-switch>
              </mwc-formfield>
            </div>
        </div>
    `;
    }

    // _renderLayoutEditor() {
    //     const schema = this._schema(this.hass.localize);
    //     const data = {
    //         ...this._config,
    //     };
    //     return html`
    //   <p>
    //     See
    //     <a
    //       href="https://github.com/thomasloven/lovelace-layout-card"
    //       target="_blank"
    //       rel="no referrer"
    //     >
    //       layout-card on github
    //     </a>
    //     for usage instructions.
    //   </p>
    //   <ha-form
    //     .hass=${this.hass}
    //     .data=${data}
    //     .schema=${schema}
    //     .computeLabel=${this._computeLabel}
    //     @value-changed=${this._valueChanged}
    //   ></ha-form>
    // `;
    // }

    private _initialize(): void {
        if (this.hass === undefined) return;
        if (this._config === undefined) return;
        if (this._helpers === undefined) return;
        this._initialized = true;
    }

    private async loadCardHelpers(): Promise<void> {
        this._helpers = await (window as any).loadCardHelpers();
    }

    private _valueChanged(ev): void {
        if (!this._config || !this.hass) {
            return;
        }
        const target = ev.target;
        if (this[`_${target.configValue}`] === target.value) {
            return;
        }
        if (target.configValue) {
            if (target.value === '') {
                const tmpConfig = { ...this._config };
                delete tmpConfig[target.configValue];
                this._config = tmpConfig;
            } else {
                this._config = {
                    ...this._config,
                    [target.configValue]: target.checked !== undefined ? target.checked : target.value,
                };
            }
        }
        fireEvent(this, 'config-changed', { config: this._config });
    }

    static styles: CSSResultGroup = css`
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
    mwc-tab-bar {
      border-bottom: 1px solid var(--divider-color);
    }
    .layout,
    .cards #editor {
      margin-top: 8px;
      border: 1px solid var(--divider-color);
      padding: 12px;
    }
    .cards .toolbar {
      display: flex;
      --paper-tabs-selection-bar-color: var(--primary-color);
      --paper-tab-ink: var(--primary-color);
    }
  `;
}