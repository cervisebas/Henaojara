import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { 
  provideFASTDesignSystem,
  fastCard, 
  fastButton,
  fastTextField,
  fastMenu,
  fastMenuItem,
  fastSkeleton,
  fastHorizontalScroll,
  fastProgress,
  fastProgressRing,
  fastTabPanel,
  fastTabs,
  fastTab,
  fastDesignSystemProvider,
  fastListbox,
  fastOption,
  fastDivider,
  fastSelect,
  fastAccordion,
  fastAccordionItem
} from '@microsoft/fast-components';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

provideFASTDesignSystem()
  .register(
    fastCard(),
    fastButton(),
    fastTextField(),
    fastMenu(),
    fastMenuItem(),
    fastSkeleton(),
    fastHorizontalScroll(),
    fastProgress(),
    fastProgressRing(),
    fastTabs(),
    fastTabPanel(),
    fastTab(),
    fastDesignSystemProvider(),
    fastListbox(),
    fastOption(),
    fastDivider(),
    fastSelect(),
    fastAccordion(),
    fastAccordionItem()
  );