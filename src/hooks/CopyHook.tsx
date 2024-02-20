import React, { useState } from 'react';

function useCopyToClipboard() {
	const [isCopied, setIsCopied] = useState<boolean>(false);

	const copyToClipboard = (text: string) => {
		navigator.clipboard
			.writeText(text)
			.then(() => {
				setIsCopied(true);
				setTimeout(() => {
					setIsCopied(false);
				}, 3000); // Reset isCopied state to false after 3 seconds
			})
			.catch((error) => {
				console.error('Error copying text: ', error);
			});
	};

	return [isCopied, copyToClipboard];
}

export default useCopyToClipboard;