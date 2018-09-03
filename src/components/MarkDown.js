import mmd from 'micromarkdown';
import React from 'react';

//export default {};

export default function ({ children = "" }) {
	return (<span dangerouslySetInnerHTML={{ __html: mmd.parse(children) }} />);
}

