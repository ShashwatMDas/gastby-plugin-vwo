const validator = (reporter, pluginOptions) => {
    let err = '';
    if (!pluginOptions || !pluginOptions.account_id) {
        err += 'gatsby-plugin-vwo: You must provide your VWO account ID\n'
    }
    if(pluginOptions.account_id && typeof pluginOptions.account_id != 'number') {
        err += 'gatsby-plugin-vwo: account_id must be a number\n'
    }
    if(pluginOptions.settings_tolerance && typeof pluginOptions.settings_tolerance != 'number') {
        err += 'gatsby-plugin-vwo: settings_tolerance must be a number\n'
    }
    if(pluginOptions.library_tolerance && typeof pluginOptions.library_tolerance != 'number') {
        err += 'gatsby-plugin-vwo: library_tolerance must be a number\n'
    }
    if(pluginOptions.use_existing_jquery && typeof pluginOptions.use_existing_jquery != 'boolean') {
        err += 'gatsby-plugin-vwo: use_existing_jquery must be a boolean value\n'
    }
    if(pluginOptions.is_spa && typeof pluginOptions.is_spa != 'number') {
        err += 'gatsby-plugin-vwo: is_spa must be a number\n'
    }
    if(pluginOptions.hide_element && typeof pluginOptions.hide_element != 'string') {
        err += 'gatsby-plugin-vwo: hide_element must be a string\n'
    }
    if(pluginOptions.async && typeof pluginOptions.async != 'boolean') {
        err += 'gatsby-plugin-vwo: async must be a boolean\n'
    }
    return err != '' ? reporter.error(err, new Error(err)) : null;
}

exports.onPreBootstrap = ({ reporter }, pluginOptions) => {
    return validator(reporter, pluginOptions)
  }