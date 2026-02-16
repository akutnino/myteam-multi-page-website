import { useState, type CSSProperties, type ReactNode } from 'react';
import { Link } from 'react-router';

function ContactButton({
	className,
	children,
	hoverStyles,
}: {
	className: string;
	hoverStyles: {
		backgroundColor: '--color-Neutral-0' | '--color-Teal-900';
		color: '--color-Neutral-0' | '--color-Teal-950';
	};
	children: ReactNode;
}) {
	const [isHover, setIsHover] = useState<boolean>(false);

	const handleOnMouseEnter = () => {
		setIsHover((currentState) => !currentState);
	};

	const handleOnMouseLeave = () => {
		setIsHover((currentState) => !currentState);
	};

	const styles: CSSProperties = {
		backgroundColor: `var(${hoverStyles.backgroundColor})`,
		color: `var(${hoverStyles.color})`,
	};

	return (
		<Link
			className={className}
			style={isHover ? styles : undefined}
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
			to={'/contact'}
		>
			{children}
		</Link>
	);
}

export default ContactButton;
