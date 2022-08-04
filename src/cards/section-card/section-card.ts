// This puts your card into the UI card picker dialog

import {customElement, property, state} from "lit/decorators";
import {css, CSSResultGroup, html, LitElement, PropertyValues, TemplateResult} from "lit";
import {
    ActionHandlerEvent,
    getLovelace, handleAction,
    hasAction,
    hasConfigOrEntityChanged,
    HomeAssistant,
    LovelaceCardEditor
} from "custom-card-helpers";
import {magicSectionCardConfig} from "./section-card-types";
import {actionHandler} from "./section-action-handler-directive";

import { localize } from '../../localize';

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
    type: 'magic-section-card',
    name: 'Section Card',
    description: 'A section card that ...',
    // TODO: Create a better description
});

@customElement('magic-section-card')
export class MagicSectionCard extends LitElement {
    public static async getConfigElement(): Promise<LovelaceCardEditor> {
        await import('./section-card-editor');
        return document.createElement('magic-section-card-editor');
    }

    public static getStubConfig(): Record<string, unknown> {
        return {};
    }

    // TODO Add any properities that should cause your element to re-render here
    // https://lit.dev/docs/components/properties/
    @property({ attribute: false }) public hass!: HomeAssistant;

    @state() private config!: magicSectionCardConfig;

    // https://lit.dev/docs/components/properties/#accessors-custom
    public setConfig(config: magicSectionCardConfig): void {
        // TODO Check for required fields and that they are of the proper format
        if (!config) {
            throw new Error(localize('common.invalid_configuration'));
        }

        if (config.test_gui) {
            getLovelace().setEditMode(true);
        }

        this.config = {
            name: 'magic-section',
            ...config,
        };
    }

    // https://lit.dev/docs/components/lifecycle/#reactive-update-cycle-performing
    protected shouldUpdate(changedProps: PropertyValues): boolean {
        if (!this.config) {
            return false;
        }

        return hasConfigOrEntityChanged(this, changedProps, false);
    }

    // https://lit.dev/docs/components/rendering/
    protected render(): TemplateResult | void {
        // TODO Check for stateObj or other necessary things and render a warning if missing
        if (this.config.show_warning) {
            return this._showWarning(localize('common.show_warning'));
        }

        if (this.config.show_error) {
            return this._showError(localize('common.show_error'));
        }

        return html`
      <ha-card
        .header=${this.config.name}
        @action=${this._handleAction}
        .actionHandler=${actionHandler({
            hasHold: hasAction(this.config.hold_action),
            hasDoubleClick: hasAction(this.config.double_tap_action),
        })}
        tabindex="0"
        .label=${`magic-section: ${this.config.entity || 'No Entity Defined'}`}
      ></ha-card>
    `;
    }

    private _handleAction(ev: ActionHandlerEvent): void {
        if (this.hass && this.config && ev.detail.action) {
            handleAction(this, this.hass, this.config, ev.detail.action);
        }
    }

    private _showWarning(warning: string): TemplateResult {
        return html` <hui-warning>${warning}</hui-warning> `;
    }

    private _showError(error: string): TemplateResult {
        const errorCard = document.createElement('hui-error-card');
        errorCard.setConfig({
            type: 'error',
            error,
            origConfig: this.config,
        });

        return html` ${errorCard} `;
    }

    // https://lit.dev/docs/components/styles/
    static get styles(): CSSResultGroup {
        return css``;
    }
}