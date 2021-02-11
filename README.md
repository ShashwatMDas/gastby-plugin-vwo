# GATSBY-PLUGIN-VWO

Easily integrate your VWO smartcode to your gatsby website!

## Installation

Use the package manager npm to install gatsby-plugin-vwo.

```bash
npm install gatsby-plugin-vwo
```

## Usage

In your gatsby-config.js file, add the plugin like this:

```
module.exports = {
    plugins: [
        {
          resolve: 'gatsby-plugin-vwo',
          options: {
            account_id: ... ,           //number
            settings_tolerance: ... ,   //number  (Optional: Defaults to 2000)
            library_tolerance = ... ,   //number  (Optional: Defaults to 2500)
            use_existing_jquery = ... , //boolean (Optional: Defaults to false)
            is_spa = ...,               //number  (Optional: Defaults to 1)
            hide_element = ... ,        //string  (Optional: Defaults to 'body')
            async: ... ,                //boolean (Optional: Defaults to true)
          }, 
        },
    ]
}

```



## License
[ISC](https://choosealicense.com/licenses/isc/)