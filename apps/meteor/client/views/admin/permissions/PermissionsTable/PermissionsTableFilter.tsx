import { TextInput } from '@rocket.chat/fuselage';
import { useMutableCallback, useDebouncedValue } from '@rocket.chat/fuselage-hooks';
import { useTranslation } from '@rocket.chat/ui-contexts';
import React, { useState, useEffect, ReactElement } from 'react';

const PermissionsTableFilter = ({ onChange }: { onChange: (debouncedFilter: string) => void }): ReactElement => {
	const t = useTranslation();
	const [filter, setFilter] = useState('');
	const debouncedFilter = useDebouncedValue(filter, 500);

	useEffect(() => {
		onChange(debouncedFilter);
	}, [debouncedFilter, onChange]);

	const handleFilter = useMutableCallback(({ currentTarget: { value } }) => {
		setFilter(value);
	});

	return <TextInput value={filter} onChange={handleFilter} placeholder={t('Search')} flexGrow={0} />;
};

export default PermissionsTableFilter;