import { useState, useEffect } from 'react';
import {
	projectStorage,
	projectFirestore,
	timestamp,
} from '../firebase/config';

const useStorage = file => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	useEffect(() => {
		//reference where the files should be saved
		const storageRef = projectStorage.ref(file.name);
		//reference where the collection should be saved
		const collectionRef = projectFirestore.collection('images');

		//asynchronous activity based on event
		storageRef.put(file).on(
			'state_changed',
			snap => {
				//below formula gives us the percentage
				let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
				setProgress(percentage);
			},
			//show error
			err => {
				setError(err);
			},
			//below async runs when the file upload is complete
			async () => {
				const url = await storageRef.getDownloadURL();
				const createdAt = timestamp();
				collectionRef.add({ url, createdAt });
				setUrl(url);
			}
		);
	}, [file]);

	return { progress, url, error };
};

export default useStorage;
