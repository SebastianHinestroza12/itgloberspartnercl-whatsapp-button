📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Whatsapp Button

![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)



This component is a button to redirect to a person's WhatsApp chat with a message already configured and ready to send.


<img  alt="image" src="https://res.cloudinary.com/dafsjo7al/image/upload/v1677007536/button_tzt3sd.png">

## Configuration 

1. Import the Whatsapp Button app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "{vendor}.whatsapp-button": "0.x"
  }
 ```
 
 2. Add the whatsapp-button block to the store-theme. for example:
```json
 {
"flex-layout.row#whatsapp__button": {
    "title": "Whatsapp Button",
    "children": [
      "whatsapp-button"
    ],
    "props": {
      "blockClass": "container__whatsapp--button"
    }
  },
  "whatsapp-button": {
    "props": {
      "logo": "https://api.iconify.design/ri/whatsapp-line.svg?color=%23f25529&width=38"
    }
  }
}
   ```
 ### whatsapp-button props

| Prop name    | Type            | Description                                                                               | Default value    |
| ------------ | --------------- | ----------------------------------------------------------------------------------------- | ---------------- | 
| `logo`       | `String`        | Define the url of the image that will be used for the whatsapp button                     | `undefined` |
| `phone`      | `String`        | Defines the WhatsApp number that the store uses to provide customer  service              | `+1234578` |
| `message`    | `String`        | Define the welcome message that the client will see when entering the WhatsApp chat       | `Hello we help you?` |
| `width`      | `Number`        | Define the width of the button                                                            | `120` |
| `height`     | `Number`        | Define the height of the button                                                           | `120` |


## Customization

No CSS Handles are available yet for the app customization.

<!-- DOCS-IGNORE:start -->

## Contributors ✨

SEBASTIAN MENA
<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
