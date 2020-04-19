import React from 'react';

import { __ } from '../i18n';

const TestMessageResult = ({ result, type }) => {
	return result ? (
		<div className="mt-2">
			<span className="text-secondary">{__('Test Result:')}</span>{' '}
			<span className={`font-weight-bold text-${type}`}>{result}</span>
		</div>
	) : null;
};

export default TestMessageResult;
