import type { ChangeEventHandler } from 'react';

function FormInput({
	type = 'text',
	id,
	placeholder,
	value,
	onChange,
}: {
	type?: string;
	id: string;
	placeholder: string;
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> | undefined;
}) {
	return (
		<input
			className='formInput'
			onChange={onChange}
			value={value}
			type={type}
			name={id}
			id={id}
			title={id}
			placeholder={placeholder}
			required={true}
			autoComplete='off'
		/>
	);
}

export default FormInput;
