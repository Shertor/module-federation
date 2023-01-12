'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">microfrontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-d83a17506d8baa99735ce00a21dc522a4b91ae695c3b0b970a7ef4368540a1ba0492d1fd10740dc2ad7c44d2a4a9e88ade3b6f9408c51d81021593400d17559d"' : 'data-target="#xs-components-links-module-AppModule-d83a17506d8baa99735ce00a21dc522a4b91ae695c3b0b970a7ef4368540a1ba0492d1fd10740dc2ad7c44d2a4a9e88ade3b6f9408c51d81021593400d17559d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-d83a17506d8baa99735ce00a21dc522a4b91ae695c3b0b970a7ef4368540a1ba0492d1fd10740dc2ad7c44d2a4a9e88ade3b6f9408c51d81021593400d17559d"' :
                                            'id="xs-components-links-module-AppModule-d83a17506d8baa99735ce00a21dc522a4b91ae695c3b0b970a7ef4368540a1ba0492d1fd10740dc2ad7c44d2a4a9e88ade3b6f9408c51d81021593400d17559d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-57dddb63fa3aa10e3cdfe5ed05a68540a3a04d007dc990d58591e5761402a22de3508a31ae1764106bcd84d6361953eeb2f436e4b01d4cc031437c9193c03006-1"' : 'data-target="#xs-components-links-module-AppModule-57dddb63fa3aa10e3cdfe5ed05a68540a3a04d007dc990d58591e5761402a22de3508a31ae1764106bcd84d6361953eeb2f436e4b01d4cc031437c9193c03006-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-57dddb63fa3aa10e3cdfe5ed05a68540a3a04d007dc990d58591e5761402a22de3508a31ae1764106bcd84d6361953eeb2f436e4b01d4cc031437c9193c03006-1"' :
                                            'id="xs-components-links-module-AppModule-57dddb63fa3aa10e3cdfe5ed05a68540a3a04d007dc990d58591e5761402a22de3508a31ae1764106bcd84d6361953eeb2f436e4b01d4cc031437c9193c03006-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Plugin1Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Plugin1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Plugin2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Plugin2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Plugin3Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Plugin3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Plugin4Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Plugin4Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Plugin5Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Plugin5Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2ab4ed7246a02e3b8598a93a1bac4207573838c27317ef1ddc0d4bf4e6a2c03ccad7345d3a00705b650dfe8ad499dc95118609a54d07382424b792e70c56531f-2"' : 'data-target="#xs-components-links-module-AppModule-2ab4ed7246a02e3b8598a93a1bac4207573838c27317ef1ddc0d4bf4e6a2c03ccad7345d3a00705b650dfe8ad499dc95118609a54d07382424b792e70c56531f-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2ab4ed7246a02e3b8598a93a1bac4207573838c27317ef1ddc0d4bf4e6a2c03ccad7345d3a00705b650dfe8ad499dc95118609a54d07382424b792e70c56531f-2"' :
                                            'id="xs-components-links-module-AppModule-2ab4ed7246a02e3b8598a93a1bac4207573838c27317ef1ddc0d4bf4e6a2c03ccad7345d3a00705b650dfe8ad499dc95118609a54d07382424b792e70c56531f-2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BtnMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeneralPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GeneralPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PluginProxyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PluginProxyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TopbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TopbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-e1a8b3bb8a18b5b285699e21f28115cd6c8fad0b8f5b4312b0964709cf51ac09e2c80b3cace4cef3d590d626e17d54e7564c1b59c92559754dc0d2de94512872"' : 'data-target="#xs-components-links-module-DashboardModule-e1a8b3bb8a18b5b285699e21f28115cd6c8fad0b8f5b4312b0964709cf51ac09e2c80b3cace4cef3d590d626e17d54e7564c1b59c92559754dc0d2de94512872"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-e1a8b3bb8a18b5b285699e21f28115cd6c8fad0b8f5b4312b0964709cf51ac09e2c80b3cace4cef3d590d626e17d54e7564c1b59c92559754dc0d2de94512872"' :
                                            'id="xs-components-links-module-DashboardModule-e1a8b3bb8a18b5b285699e21f28115cd6c8fad0b8f5b4312b0964709cf51ac09e2c80b3cace4cef3d590d626e17d54e7564c1b59c92559754dc0d2de94512872"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageLoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PluginProxyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PluginProxyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewLoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewLoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StyleguideLibModule.html" data-type="entity-link" >StyleguideLibModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent-2.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BtnMenuComponent.html" data-type="entity-link" >BtnMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/Plugin1Component.html" data-type="entity-link" >Plugin1Component</a>
                            </li>
                            <li class="link">
                                <a href="components/Plugin2Component.html" data-type="entity-link" >Plugin2Component</a>
                            </li>
                            <li class="link">
                                <a href="components/Plugin3Component.html" data-type="entity-link" >Plugin3Component</a>
                            </li>
                            <li class="link">
                                <a href="components/Plugin4Component.html" data-type="entity-link" >Plugin4Component</a>
                            </li>
                            <li class="link">
                                <a href="components/Plugin5Component.html" data-type="entity-link" >Plugin5Component</a>
                            </li>
                            <li class="link">
                                <a href="components/PluginComponent.html" data-type="entity-link" >PluginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PluginProxyComponent.html" data-type="entity-link" >PluginProxyComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PluginProxyComponent-1.html" data-type="entity-link" >PluginProxyComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Plugins.html" data-type="entity-link" >Plugins</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EventBusService.html" data-type="entity-link" >EventBusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LayoutService.html" data-type="entity-link" >LayoutService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LookupService.html" data-type="entity-link" >LookupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LookupService-1.html" data-type="entity-link" >LookupService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MfeShellExampleService.html" data-type="entity-link" >MfeShellExampleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModulesImportService.html" data-type="entity-link" >ModulesImportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationService.html" data-type="entity-link" >NavigationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PluginsImportService.html" data-type="entity-link" >PluginsImportService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/BusEvent.html" data-type="entity-link" >BusEvent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});