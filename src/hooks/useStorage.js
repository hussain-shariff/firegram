import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase/config";
import { doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore"; 

const useStorage = (file) =>{
    const [progress, setProgress] = useState(0);
    const [error, seterror] = useState(null);
    const [url, seturl] = useState(null);

    useEffect(()=>{
        const imagesRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(imagesRef, file);
        const docRef = doc(db, 'images', file.name);

        uploadTask.on('state_changed', (snapshot) => {
            const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
            }, 
        (error) => {
            seterror(error);
        }, 
        () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setDoc(docRef, {url: downloadURL})
            const updateTimestamp = updateDoc(docRef, {
                timestamp: serverTimestamp()
            }); 
            seturl(downloadURL);
        });    
    });
    }, [file]);
    return { progress, error, url };
}

export default useStorage;