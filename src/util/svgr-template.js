// TODO: Review why is not working with the Viewbox attribute

module.exports = function svgrTemplate(
  { template },
  opts,
  { imports, componentName, jsx },
) {
  const tpl = template.smart({ plugins: [] });
  return tpl.ast`
    import * as React from 'react';

    const ${componentName} = (props) => {
      return ${jsx.replace(
        'svg',
        `svg viewBox="0 0 24 24" {...props}`
      )};
    };

    export default ${componentName};
  `;
};
