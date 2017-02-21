# Hylo UI Kit

A living stylesheet derived from the mock-ups for hylo-app.

## IGNORE - WIP: Component rules

* Create components as:
    MyComponent.js
    MyComponent.test.js
    MyComponent.connector.js
    MyComponent.connector.test.js
    MyComponent.css

    _or as a pod_

    MyComponent/component.js
    MyComponent/component.test.js    
    MyComponent/component.css
    MyComponent/connector.js
    MyComponent/connector.test.js
    MyComponent/index.js

    _(or as a pod in this format -- TBD)_

    MyComponent/MyComponent.js
    MyComponent/MyComponent.test.js
    MyComponent/MyComponent.connector.js
    MyComponent/MyComponent.connector.test.js
    MyComponent/MyComponent.css
    MyComponent/index.js


* Use a pod if:
  * The component is Redux connected (for clear separation and testability of connection related functions found)
  * The component has child components with their own stylesheets



## Stylesheet rules (LEJ: draft)

* Create a component pod directory with a styles.css file, in that file @import in any "global" stylesheets needed (i.e. layout.css) and define local styles.

* CSS naming: use [BEM](http://getbem.com) style (e.g. ````sheet__title—blinking````) for anything in src/css/*.css, otherwise CamelCase for any styles defined on the component.

* For now don't create anything in src/css/* nor add any styles to those stylesheets, use CSS modules "composes" using the global style you'd like to modifiy in your local component. We will routinely review all stylesheets and any composures in particulary to look for global extractions.

* Use defined font-property sets, colors and spacing. Use CSS calc() to work from defined spacing units whenever possible. In routine reviews "hard-coded" values will be reviewed for correction or abstraction to the theme layer.

* Use [CSS spec custom property values](https://github.com/pascalduez/postcss-apply) for variables:

````
/* definition (in src/css/variables.css) */

root {
  --sheet-width: 1156px;
}


/* in use */

.mySheet {
  width: var(—sheet-width);
}
````

https://en.bem.info/methodology/faq/#why-should-i-avoid-using-nested-selectors
https://en.bem.info/methodology/naming-convention/

Use this BEM naming style for all styles (including within a component):

    ”Sans underscore“ style
    blockName-elemName--modName--modVal

    Names are written in CamelCase.
    An element name is separated from a block name by a single hyphen (-).
    Modifiers are delimited by double hyphens (--).
    The value of a modifier is separated from its name by a double hyphen (--).
    Important! Double hyphen within the comment (--) is perceived as part of the comment and therefore its presence lead to error during document validation. HTML5 Specification


## PostCSS Stack

PostCSS Atom I recommend the [language-postcss plugin](https://atom.io/packages/language-postcss) to get
- [React CSS Modules](https://github.com/gajus/react-css-modules)
- [PostCSS](https://github.com/postcss/postcss)
  - [postcss-import](https://github.com/postcss/postcss-import)
  - [postcss-nested](https://github.com/postcss/postcss-nested)
  - [postcss-cssnext](http://cssnext.io/)
