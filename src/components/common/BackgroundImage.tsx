function BackgroundImage({ className, src }: { className: string; src: string }) {
	return (
		<img
			className={className}
			src={src}
			alt='background_image'
			role='presentation'
			fetchPriority='high'
		/>
	);
}

export default BackgroundImage;
